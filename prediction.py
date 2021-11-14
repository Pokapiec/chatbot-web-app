# import torch
import os
from torch import tensor, argmax
from transformers import AutoTokenizer, AutoModelForQuestionAnswering, AutoModelForCausalLM
from transformers import pipeline

tokenizer = AutoTokenizer.from_pretrained('albert-xlarge-v2-squad-v2', local_files_only=True)
model = AutoModelForQuestionAnswering.from_pretrained('albert-xlarge-v2-squad-v2', local_files_only=True)

nlp = pipeline('question-answering', model=model, tokenizer=tokenizer)


def question_answer(question, text):
    
    #tokenize question and text as a pair
    input_ids = tokenizer.encode(question, text)
    
    #string version of tokenized ids
    tokens = tokenizer.convert_ids_to_tokens(input_ids)
    
    #segment IDs
    #first occurence of [SEP] token
    sep_idx = input_ids.index(tokenizer.sep_token_id)
    #number of tokens in segment A (question)
    num_seg_a = sep_idx+1
    #number of tokens in segment B (text)
    num_seg_b = len(input_ids) - num_seg_a
    
    #list of 0s and 1s for segment embeddings
    segment_ids = [0]*num_seg_a + [1]*num_seg_b
    assert len(segment_ids) == len(input_ids)
    
    #model output using input_ids and segment_ids
    output = model(tensor([input_ids]), token_type_ids=tensor([segment_ids]))
    
    #reconstructing the answer
    answer_start = argmax(output.start_logits)
    answer_end = argmax(output.end_logits)
    answer = ''
    if answer_end >= answer_start:
        answer = tokens[answer_start]
        for i in range(answer_start+1, answer_end+1):
            if tokens[i][0:2] == "##":
                answer += tokens[i][2:]
            else:
                answer += " " + tokens[i]
                
    if answer.startswith("[CLS]"):
        answer = "Unable to find the answer to your question."
    
    return answer.capitalize()


tokenizer = AutoTokenizer.from_pretrained("microsoft/DialoGPT-small", local_files_only=True)
model = AutoModelForCausalLM.from_pretrained("microsoft/DialoGPT-small", local_files_only=True)

def get_answer(question):
    # Let's chat for 5 lines
    # for step in range(5):
        # encode the new user input, add the eos_token and return a tensor in Pytorch
    new_user_input_ids = tokenizer.encode(question + tokenizer.eos_token, return_tensors='pt')

    # append the new user input tokens to the chat history
    bot_input_ids = new_user_input_ids

    # generated a response while limiting the total chat history to 1000 tokens, 
    chat_history_ids = model.generate(bot_input_ids, max_length=1000, pad_token_id=tokenizer.eos_token_id)

    # pretty print last ouput tokens from bot
    return tokenizer.decode(chat_history_ids[:, bot_input_ids.shape[-1]:][0], skip_special_tokens=True)
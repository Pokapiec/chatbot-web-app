import torch
# from torch import tensor, argmax
from transformers import AutoTokenizer, AutoModelForQuestionAnswering, AutoModelForCausalLM, Conversation, pipeline, AlbertTokenizer, AlbertForQuestionAnswering

class Models:
    def __init__(self):
        self.tokenizer = AutoTokenizer.from_pretrained('models/albert-base-v2-squad2', local_files_only=True)
        self.model = AutoModelForQuestionAnswering.from_pretrained('models/albert-base-v2-squad2', local_files_only=True)
        self.nlp = pipeline('question-answering', model=self.model, tokenizer=self.tokenizer, framework="pt")
        self.tokenizer_gpt = AutoTokenizer.from_pretrained("models/DialoGPT-small", local_files_only=True)
        self.model_gpt = AutoModelForCausalLM.from_pretrained("models/DialoGPT-small", local_files_only=True)
        self.chat_history_ids = torch.Tensor()
        self.step = 0

    def set_history(self, chat_hist):
        self.chat_history_ids = chat_hist

models = Models()
# tokenizer = AutoTokenizer.from_pretrained('models/albert-xlarge-v2-squad-v2', local_files_only=True)
# model = AutoModelForQuestionAnswering.from_pretrained('models/albert-xlarge-v2-squad-v2', local_files_only=True)

# nlp = pipeline('question-answering', model=model, tokenizer=tokenizer, framework="pt")


# tokenizer_gpt = AutoTokenizer.from_pretrained("models/DialoGPT-medium", local_files_only=True)
# model_gpt = AutoModelForCausalLM.from_pretrained("models/DialoGPT-medium", local_files_only=True)

def get_answer(question):

    input_ids = models.tokenizer_gpt.encode(question + models.tokenizer_gpt.eos_token, return_tensors='pt')

    bot_input_ids = input_ids

    chat_history_ids = models.model_gpt.generate(
        bot_input_ids,
        max_length=100,
        do_sample=True,
        top_p=0.95,
        top_k=50,
        temperature=0.75,
        num_return_sequences=5,
        pad_token_id=models.tokenizer_gpt.eos_token_id)

    models.set_history(chat_history_ids)
    models.step = 1

    return models.tokenizer_gpt.decode(chat_history_ids[:, bot_input_ids.shape[-1]:][0], skip_special_tokens=True)







# def question_answer(question, text):
    
#     #tokenize question and text as a pair
#     input_ids = tokenizer.encode(question, text)
    
#     #string version of tokenized ids
#     tokens = tokenizer.convert_ids_to_tokens(input_ids)
    
#     #segment IDs
#     #first occurence of [SEP] token
#     sep_idx = input_ids.index(tokenizer.sep_token_id)
#     #number of tokens in segment A (question)
#     num_seg_a = sep_idx+1
#     #number of tokens in segment B (text)
#     num_seg_b = len(input_ids) - num_seg_a
    
#     #list of 0s and 1s for segment embeddings
#     segment_ids = [0]*num_seg_a + [1]*num_seg_b
#     assert len(segment_ids) == len(input_ids)
    
#     #model output using input_ids and segment_ids
#     output = model(tensor([input_ids]), token_type_ids=tensor([segment_ids]))
    
#     #reconstructing the answer
#     answer_start = argmax(output.start_logits)
#     answer_end = argmax(output.end_logits)
#     answer = ''
#     if answer_end >= answer_start:
#         answer = tokens[answer_start]
#         for i in range(answer_start+1, answer_end+1):
#             if tokens[i][0:2] == "##":
#                 answer += tokens[i][2:]
#             else:
#                 answer += " " + tokens[i]
                
#     if answer.startswith("[CLS]"):
#         answer = "Unable to find the answer to your question."
    
#     return answer.capitalize()
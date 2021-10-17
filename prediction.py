# # import torch
# from torch import tensor, argmax
# from transformers import BertForQuestionAnswering
# from transformers import BertTokenizer


# model = BertForQuestionAnswering.from_pretrained('bert-large-uncased-whole-word-masking-finetuned-squad')
# tokenizer = BertTokenizer.from_pretrained('bert-large-uncased-whole-word-masking-finetuned-squad')

# TEXT = '''Warsaw University of Technology is a public polytechnic founded in 1915 in Warsaw on the initiative and as a result of many years of efforts by the Warsaw Scientific Society with the consent of the governor, General Hans von Beseler. It is one of the largest and best technical universities in Poland and Central and Eastern Europe. For years The Warsaw University of Technology has been ranked 1st in Poland in the "Ranking of Higher Schools" among technical universities published by the monthly "Perspektywy".

# According to the webometric ranking of universities of the world from January 2019, showing the involvement of academic institutions in the Internet, the university is ranked first in Poland among technical universities, and in the world 503 among all types of universities.

# The official date of establishing the Warsaw University of Technology is 1915, but from 1898 there was the Polytechnic Institute in Warsaw with Russian as the language of instruction. The university dates back to 1826, when the Preparatory School for the Polytechnic Institute was established. The main University of Technology complex is located in the center of Warsaw. It is the area between Aleja Niepodległości, Aleja Armii Ludowej and the streets of Polna, Noakowskiego and Koszykowa. The main building at the Politechnika Square is occupied by the Main Building, which houses the faculties of AiNS, Electrical and GiK. The buildings of the departments of Chemistry, EiTI, Physics, IL, WIBHiIŚ, MiNI, MEiL and Transport are located around. Near the Main Campus there are also the Faculty of Architecture at Koszykowa Street and the Faculty of IChiP, DS "Riviera" and DS Mikrus at Waryńskiego Street.

# The University of Technology has a branch in Płock. It houses the Faculty of Civil Engineering, Mechanics and Petrochemistry, the College of Economic and Social Sciences, DS Wcześniak, and other facilities (sports, teaching, laboratories).'''

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
from flask import Flask, request, jsonify, render_template, send_from_directory
# from prediction import question_answer, TEXT
from flask_cors import CORS
from transformers import DistilBertTokenizer, DistilBertForQuestionAnswering
from transformers import pipeline
import os


tokenizer = DistilBertTokenizer.from_pretrained(os.path.join('distilbert-base-uncased-distilled-squad/'), local_files_only=True)
model = DistilBertForQuestionAnswering.from_pretrained(os.path.join('distilbert-base-uncased-distilled-squad/'), local_files_only=True)
# conversational_pipeline = pipeline("conversational")

TEXT = '''Warsaw University of Technology is a public polytechnic founded in 1915 in Warsaw on the initiative and as a result of many years of efforts by the Warsaw Scientific Society with the consent of the governor, General Hans von Beseler. It is one of the largest and best technical universities in Poland and Central and Eastern Europe. For years The Warsaw University of Technology has been ranked 1st in Poland in the "Ranking of Higher Schools" among technical universities published by the monthly "Perspektywy".

According to the webometric ranking of universities of the world from January 2019, showing the involvement of academic institutions in the Internet, the university is ranked first in Poland among technical universities, and in the world 503 among all types of universities.

The official date of establishing the Warsaw University of Technology is 1915, but from 1898 there was the Polytechnic Institute in Warsaw with Russian as the language of instruction. The university dates back to 1826, when the Preparatory School for the Polytechnic Institute was established. The main University of Technology complex is located in the center of Warsaw. It is the area between Aleja Niepodległości, Aleja Armii Ludowej and the streets of Polna, Noakowskiego and Koszykowa. The main building at the Politechnika Square is occupied by the Main Building, which houses the faculties of AiNS, Electrical and GiK. The buildings of the departments of Chemistry, EiTI, Physics, IL, WIBHiIŚ, MiNI, MEiL and Transport are located around. Near the Main Campus there are also the Faculty of Architecture at Koszykowa Street and the Faculty of IChiP, DS "Riviera" and DS Mikrus at Waryńskiego Street.

The University of Technology has a branch in Płock. It houses the Faculty of Civil Engineering, Mechanics and Petrochemistry, the College of Economic and Social Sciences, DS Wcześniak, and other facilities (sports, teaching, laboratories).'''

nlp = pipeline('question-answering', model=model, tokenizer=tokenizer)


# from transformers import AutoModelForCausalLM, AutoTokenizer
# import torch

# tokenizer = AutoTokenizer.from_pretrained("microsoft/DialoGPT-small")
# model = AutoModelForCausalLM.from_pretrained("microsoft/DialoGPT-small")
# def get_answer(question):
#     # Let's chat for 5 lines
#     # for step in range(5):
#         # encode the new user input, add the eos_token and return a tensor in Pytorch
#     new_user_input_ids = tokenizer.encode(question + tokenizer.eos_token, return_tensors='pt')

#     # append the new user input tokens to the chat history
#     bot_input_ids = new_user_input_ids

#     # generated a response while limiting the total chat history to 1000 tokens, 
#     chat_history_ids = model.generate(bot_input_ids, max_length=1000, pad_token_id=tokenizer.eos_token_id)

#     # pretty print last ouput tokens from bot
#     return tokenizer.decode(chat_history_ids[:, bot_input_ids.shape[-1]:][0], skip_special_tokens=True)

app = Flask(__name__, static_url_path='', static_folder='./frontend/build')
CORS(app, resources={r"/get-response/*": {"origins": "*"}})

@app.route('/')
def main():
    return send_from_directory(app.static_folder, 'index.html')


@app.route('/get-response/')
def message_repsonse():
    message = request.args.get('message')
    # if not message:
    #     return jsonify({'answer': 'failed'})
    # answer = question_answer(message, TEXT)
    # # print(answer)

    # if answer in ('[sep]', ''):
    # answer = conversational_pipeline(Conversation(message))
    # answer = answer.generated_responses[0]


    an = nlp({"question": message, 
    "context": TEXT})
    answer = an['answer']

    # answer = get_answer(message)
    data = {'answer': answer}
    return jsonify(data)


if __name__ == '__main__':
    app.run(debug=True)
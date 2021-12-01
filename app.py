from flask import Flask, request, jsonify, render_template, send_from_directory
from flask_cors import CORS
from transformers import pipeline
from prediction import question_answer, nlp, get_answer
from fake_db import get_data, get_text_from_id
import os
from googletrans import Translator
translator = Translator()

app = Flask(__name__, static_url_path='', static_folder='./frontend/build')
CORS(app, resources={r"/*": {"origins": "*"}})

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def main(path):
    print(path)
    return send_from_directory(app.static_folder, 'index.html')


@app.route('/api/response')
def message_repsonse():
    message = request.args.get('message')
    lang = request.args.get('lang')
    text_id = request.args.get('textid')
    casual = request.args.get('casual')
    
    print('---------', lang, '------------')
    message = translator.translate(text=message, src='pl', dest='en').text
    if not casual:
        texts = get_data()
        text = get_text_from_id(int(text_id), texts)

    if casual:
        answer = get_answer(message)
    else:
        pred = nlp(question=message, context=text)
        answer = pred['answer']

    if lang == 'PL':
        answer = translator.translate(text=answer, src='en', dest='pl').text
    data = {'answer': answer}
    return jsonify(data)


@app.get('/api/texts')
def texts():
    texts = get_data()
    return jsonify(texts)

if __name__ == '__main__':
    app.run(host="0.0.0.0", debug=True)



from flask import Flask, request, jsonify, render_template, send_from_directory
from flask_cors import CORS
from transformers import pipeline
from prediction import question_answer, nlp, get_answer
from fake_db import get_data, get_text_from_id
import os


app = Flask(__name__, static_url_path='', static_folder='./frontend/build')
CORS(app, resources={r"/*": {"origins": "*"}})

@app.route('/')
def main():
    return send_from_directory(app.static_folder, 'index.html')


@app.route('/response')
def message_repsonse():
    message = request.args.get('message')
    lang = request.args.get('lang')
    text_id = request.args.get('textid')
    casual = request.args.get('casual')
    
    print('---------', lang, '------------')

    if not casual:
        texts = get_data()
        text = get_text_from_id(int(text_id), texts)

    if casual:
        answer = get_answer(message)
    else:
        an = nlp({"question": message, 
        "context": text})
        answer = an['answer']

    data = {'answer': answer}
    return jsonify(data)


@app.get('/texts')
def texts():
    texts = get_data()
    return jsonify(texts)

if __name__ == '__main__':
    app.run(debug=True)









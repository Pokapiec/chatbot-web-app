from flask import Flask, request, jsonify, render_template, send_from_directory
from transformers import pipeline, Conversation
# from prediction import question_answer, TEXT
from flask_cors import CORS

conversational_pipeline = pipeline("conversational")

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
    answer = conversational_pipeline(Conversation(message))
    answer = answer.generated_responses[0]
    data = {'answer': answer}
    return jsonify(data)


if __name__ == '__main__':
    app.run(debug=True)
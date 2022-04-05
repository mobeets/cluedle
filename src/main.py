import random
import string
import datetime
import pandas as pd
import json

# source: https://cryptics.georgeho.org/data/clues
# CLUEFILE = '/Users/mobeets/Downloads/clues.csv'
CLUEFILE = '/Users/mobeets/code/react-crossword-generator/data/clues.txt'
WORDFILE = 'dictionary.json'

MIN_CLUES = 10
MIN_LENGTH = 5
MAX_LENGTH = 5
MAX_TRIES = 5
JOIN_KEY = '|||'

def load_cluefile(cluefile=CLUEFILE):
	# df = pd.read_csv(cluefile)
	# df = df[df.puzzle_name.apply(lambda x: 'cryptic' not in x.lower() if type(x) is str else False) == True]
	df = pd.read_csv(cluefile, sep='\t', header=None, names=['clue', 'answer', 'x', 'y'])
	return df

def save_answers(cluefile=CLUEFILE, outfile='targets2.json', min_clues=MIN_CLUES, min_length=MIN_LENGTH, max_length=MAX_LENGTH, dictfile='dictionary.json'):
	df = load_cluefile(cluefile)

	if dictfile:
		words = json.load(open(dictfile))
	else:
		words = []

	answers = []
	for answer, dfc in df.groupby('answer'):
		if len(answer) < min_length or len(answer) > max_length:
			continue
		if any([x not in string.ascii_letters for x in answer]):
			continue
		clues = dfc.clue.values.tolist()
		lenstr = '({})'.format(len(answer))
		clues = list(set([clue.replace(lenstr, '').strip() for clue in clues if type(clue) is str]))
		clues = [c for c in clues if 'across' not in c.lower() and 'down' not in c.lower()]
		if len(clues) < min_clues:
			continue
		if words and answer.lower() not in words:
			continue
		answers.append({'answer': answer, 'clues': clues})

	# pd.DataFrame(answers).to_csv(outfile)
	json.dump(answers, open(outfile, 'w'))

def get_answer_and_clues(answers):
	# answers = filter_answers(answers)
	item = random.choice(answers)
	return item['answer'], item['clues']

def load_answers(infile='answers.json'):
	return json.load(open(infile))

def main():
	answers = load_answers()
	answer, clues = get_answer_and_clues(answers)

	print("X"*len(answer))
	for i in range(MAX_TRIES):
		clue = clues.pop()
		print(clue)
		guess = input('Guess {} of {}: '.format(i+1, MAX_TRIES))
		if guess.strip().upper() == answer:
			print("CORRECT!")
			return
	print("YOU LOSE. The correct answer was {}.".format(answer))

if __name__ == '__main__':
	save_answers()
	# main()

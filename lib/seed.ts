import { sql } from '@vercel/postgres'

const data = [
	{
		id: 1,
		created_by: 'Giridhar',
		body: 'Hey!',
	},
	{
		id: 2,
		created_by: 'Alice',
		body: 'Sup?',
	},
	{
		id: 3,
		created_by: 'Bob',
		body: "What's up?",
	},
	{
		id: 4,
		created_by: 'Carol',
		body: "Not much, just bummin'",
	},
	{
		id: 5,
		created_by: 'David',
		body: 'Same here...',
	},
	{
		id: 6,
		created_by: 'Eve',
		body: "So, what's new?",
	},
	{
		id: 7,
		created_by: 'Frank',
		body: 'Not much really. Just the usual.',
	},
	{
		id: 8,
		created_by: 'Grace',
		body: 'Yeah, I feel you.',
	},
	{
		id: 9,
		created_by: 'Henry',
		body: 'So, what are you up to today?',
	},
	{
		id: 10,
		created_by: 'Isabella',
		body: "Not sure yet. Maybe I'll just chill out and watch some TV.",
	},
	{
		id: 11,
		created_by: 'Jack',
		body: 'Sounds good. I might do the same.',
	},
	{
		id: 12,
		created_by: 'Kim',
		body: 'So, what shows are you watching these days?',
	},
	{
		id: 13,
		created_by: 'Laura',
		body: "I'm really into Stranger Things right now. Have you seen it?",
	},
	{
		id: 14,
		created_by: 'Michael',
		body: "Yeah! It's so good! I'm eagerly waiting for the next season.",
	},
	{
		id: 15,
		created_by: 'Nicole',
		body: 'Me too!',
	},
	{
		id: 16,
		created_by: 'Oliver',
		body: 'So, what else are you up to?',
	},
	{
		id: 17,
		created_by: 'Patricia',
		body: 'Not much else. Just trying to survive this heat wave.',
	},
	{
		id: 18,
		created_by: 'Quentin',
		body: "Ugh, I know! It's been brutal.",
	},
	{
		id: 19,
		created_by: 'Rachel',
		body: "I'm just hoping for a cold front to come through soon.",
	},
	{
		id: 20,
		created_by: 'Samuel',
		body: 'Me too. My AC is starting to give up on me.',
	},
	{
		id: 21,
		created_by: 'Taylor',
		body: "That sucks. I hope you don't have to go without AC for too long.",
	},
	{
		id: 22,
		created_by: 'William',
		body: "Me too. I'm not sure how I would survive without it.",
	},
	{
		id: 23,
		created_by: 'Xander',
		body: "Well, I guess I'll let you go. I have to go do some laundry.",
	},
	{
		id: 24,
		created_by: 'Yvonne',
		body: "Same here. I've got a big pile of clothes to get through.",
	},
]

export const addData = () => {
	console.log('seeding...')
	data.map(async (i) => {
		await sql`INSERT INTO guesttable (created_by, body) VALUES (${i.created_by}, ${i.body});`
	})
	console.log('seeding complete')
}

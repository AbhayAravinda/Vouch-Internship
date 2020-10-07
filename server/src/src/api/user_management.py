from django.http import JsonResponse
import 	praw
import json
from ..config import get_configurations


configurations = get_configurations()


def generate_url(request):
	reddit = praw.Reddit(
		client_id = configurations["client_id"],
		client_secret = configurations["client_secret"],
		user_agent = configurations["user_agent"],
		redirect_uri="http://localhost:3000/"
	)
	return JsonResponse({'auth_link':reddit.auth.url(["identity"], "...", "permanent")})

def generate_token_using_code(request):
	if request.method=='POST':
		reddit = praw.Reddit(
			client_id = configurations["client_id"],
			client_secret = configurations["client_secret"],
			user_agent = configurations["user_agent"],
			redirect_uri="http://localhost:3000/"
		)
		input_json = json.loads(request.body)
		print(reddit.auth.authorize(input_json['code']))
		
		return JsonResponse({})
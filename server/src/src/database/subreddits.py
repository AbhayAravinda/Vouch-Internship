from django.db import models

class Subreddits(models.Model):
	user_id = models.CharField(max_length=50,primary_key=true)
	subreddit = models.CharField(max_length=50)
	
	def __str__(self):
		return subreddit
from django.db import models

class Users(models.Model):
	user_id = models.CharField(max_length=50,primary_key=true)
	token = models.CharField(max_length=200)
	
	def __str__(self):
		return user_id
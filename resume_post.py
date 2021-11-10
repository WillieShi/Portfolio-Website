import requests

url = 'https://contact.plaid.com/jobs'

data = {
    "name": "William Shi",
    "email": "williamlongshi@utexas.edu",
    "resume": "https://drive.google.com/file/d/1lSxNU53YlRRwx2etVF4sOFterL4kEcsj/view?usp=sharing",
    "phone": "214-934-8052",
    "job_id": "35a8ac95-2dce-45eb-935b-9cf44f0e3117",
    "github": "https://github.com/WillieShi",
    "twitter": "@Shiguy_Blank", 
    "website": "https://www.williamlongshi.com/", 
    "location": "Austin",
    "favorite_candy": "blue sour candy strips", 
    "superpower": "can play songs from movies on the piano" 
  }
x = requests.post(url, json = data)
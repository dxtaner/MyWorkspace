class Profile:
    def __init__(self, name, age, gender, location, distance, occupation, interests, photos, bio=None, education=None, work=None, instagram=None, spotify=None, matches=[], likes=[], messages=[], friends=[]):
        self.name = name
        self.age = age
        self.gender = gender
        self.location = location
        self.distance = distance
        self.occupation = occupation
        self.interests = interests
        self.photos = photos
        self.bio = bio
        self.education = education
        self.work = work
        self.instagram = instagram
        self.spotify = spotify
        self.matches = matches
        self.likes = likes
        self.messages = messages
        self.friends = friends

    def set_bio(self, bio):
        self.bio = bio

    def set_education(self, education):
        self.education = education

    def set_work(self, work):
        self.work = work

    def set_instagram(self, instagram):
        self.instagram = instagram

    def set_spotify(self, spotify):
        self.spotify = spotify

    def add_match(self, match):
        self.matches.append(match)

    def add_like(self, like):
        self.likes.append(like)

    def add_message(self, message):
        self.messages.append(message)

    def add_friend(self, friend):
        self.friends.append(friend)


# Örnek kullanıcı verileri
name = "John Doe"
age = 28
gender = "Male"
location = "New York City"
distance = 10
occupation = "Software Engineer"
interests = ["Hiking", "Traveling", "Cooking"]
photos = ["https://example.com/photo1.jpg",
          "https://example.com/photo2.jpg", "https://example.com/photo3.jpg"]
bio = "I'm a software engineer who loves to hike and travel. Looking for someone to share new experiences with!"
education = "B.S. Computer Science, Columbia University"
work = "Software Engineer at Google"
instagram = "johndoe"
spotify = "johndoe"
matches = ["Jane", "Sarah", "Michael"]
likes = ["Emma", "Olivia", "Sophia"]
messages = [{"sender": "Jane", "message": "Hey John, how's it going?"}, {"sender": "Sarah",
"message": "Hi John, I saw you like hiking! Have you been to any cool places recently?"}]
friends = ["Michael", "Emily"]


john = Profile(name, age, gender, location, distance, occupation, interests, photos,
               bio, education, work, instagram, spotify, matches, likes, messages, friends)

# Örnek profil özellikleri
profiles = [
    Profile("Brandon Lee", 29, "Male", "Los Angeles, CA", 5, "Photographer", ["Traveling", "Hiking", "Photography", "Music"], ["https://example.com/photo1.jpg", "https://example.com/photo2.jpg", "https://example.com/photo3.jpg"], "I'm a photographer who loves to travel, hike, and listen to music. Looking for someone who is passionate and creative!",
            "B.A. Photography, University of California, Los Angeles", "Freelance Photographer", "brandon_lee", "brandon_lee", ["Jessica", "Sophia", "Emily"], ["David", "Michael", "John"], [{"sender": "Jessica", "message": "Hi Brandon, I love your photography! What's your favorite subject to shoot?"}, {"sender": "Sophia", "message": "Hey Brandon, I see that you like music! What's your favorite genre?"}], []),
    Profile("Liam Johnson", 31, "Male", "New York, NY", 10, "Entrepreneur", ["Traveling", "Hiking", "Reading", "Meditation"], ["https://example.com/photo1.jpg", "https://example.com/photo2.jpg", "https://example.com/photo3.jpg"], "I'm an entrepreneur who enjoys traveling, hiking, and reading books. Looking for someone who is driven and mindful!",
            "B.S. Business Administration, New York University", "Founder at a tech startup", "liam_johnson", "liam_johnson", ["Emily", "Olivia", "Sophia"], ["John", "David", "Michael"], [{"sender": "Emily", "message": "Hi Liam, what kind of tech startup did you found?"}, {"sender": "Olivia", "message": "Hey Liam, I see that you like meditation! How long have you been practicing?"}], ["Jessica"]),
    Profile("Rachel Chen", 25, "Female", "San Francisco, CA", 5, "UX Designer", ["Traveling", "Hiking", "Reading", "Playing guitar"], ["https://example.com/photo1.jpg", "https://example.com/photo2.jpg", "https://example.com/photo3.jpg"], "I'm a UX designer who loves to travel, hike, and play guitar. Looking for someone who is creative and adventurous!",
            "M.S. Human-Computer Interaction, Carnegie Mellon University", "UX Designer at Google", "rachel_chen", "rachel_chen", ["Sophia", "Jessica", "Olivia"], ["Michael", "David", "John"], [{"sender": "Sophia", "message": "Hey Rachel, I see that you like playing guitar! What's your favorite song to play?"}, {"sender": "Jessica", "message": "Hi Rachel, what kind of projects do you work on as a UX designer?"}], []),
    Profile("Lucas Wang", 28, "Male", "Seattle, WA", 10, "Software Engineer", ["Traveling", "Hiking", "Playing basketball", "Watching movies"], ["https://example.com/photo1.jpg", "https://example.com/photo2.jpg", "https://example.com/photo3.jpg"], "I'm a software engineer who enjoys traveling, hiking, and playing basketball. Looking for someone who is curious and fun!",
            "B.S. Computer Science, University of Washington", "Software Engineer at Microsoft", "lucas_wang", "lucas_wang", ["Olivia", "Sophia", "Emily"], ["John", "David", "Michael"], [{"sender": "Olivia", "message": "Hey Lucas, I see that you like watching movies! What's your favorite genre?"}, {"sender": "Sophia", "message": "Hi Lucas, what's your favorite basketball team?"}], []),
    Profile("Ava Patel", 27, "Female", "Boston, MA", 5, "Marketing Manager", ["Traveling", "Hiking", "Cooking", "Dancing"], ["https://example.com/photo1.jpg", "https://example.com/photo2.jpg", "https://example.com/photo3.jpg"], "I'm a marketing manager who loves to travel, hike, and cook. Looking for someone who is adventurous and has a good sense of humor!",
            "B.S. Marketing, Boston University", "Marketing Manager at a tech company", "ava_patel", "ava_patel", ["Sophia", "Olivia", "Emily"], ["Michael", "David", "John"], [{"sender": "Sophia", "message": "Hey Ava, I see that you like cooking! What's your signature dish?"}, {"sender": "Olivia", "message": "Hi Ava, what's your favorite travel destination?"}], []),
    Profile("Adam Lee", 30, "Male", "San Diego, CA", 10, "Surf Instructor", ["Surfing", "Traveling", "Hiking", "Playing guitar"], ["https://example.com/photo1.jpg", "https://example.com/photo2.jpg", "https://example.com/photo3.jpg"], "I'm a surf instructor who enjoys traveling, hiking, and playing guitar. Looking for someone who is laid-back and loves the beach!",
            "B.A. Sports Science, University of California, San Diego", "Surf Instructor at a surf school", "adam_lee", "adam_lee", ["Olivia", "Jessica", "Sophia"], ["David", "Michael", "John"], [{"sender": "Olivia", "message": "Hey Adam, what's your favorite surf spot?"}, {"sender": "Jessica", "message": "Hi Adam, what's your favorite beach activity?"}], ["Emily"]),
    Profile("Sarah Kim", 26, "Female", "Chicago, IL", 5, "Graphic Designer", ["Traveling", "Hiking", "Painting", "Watching movies"], ["https://example.com/photo1.jpg", "https://example.com/photo2.jpg", "https://example.com/photo3.jpg"], "I'm a graphic designer who loves to travel, hike, and paint. Looking for someone who is artistic and curious!",
            "B.F.A. Graphic Design, Rhode Island School of Design", "Graphic Designer at a design agency", "sarah_kim", "sarah_kim", ["Emily", "Olivia", "Jessica"], ["Michael", "David", "John"], [{"sender": "Emily", "message": "Hey Sarah, what's your favorite painting style?"}, {"sender": "Olivia", "message": "Hi Sarah, what's your favorite travel destination?"}], []),
    Profile("Jack Davis", 32, "Male", "Austin, TX", 10, "Software Developer", ["Traveling", "Hiking", "Playing guitar", "Watching movies"], ["https://example.com/photo1.jpg", "https://example.com/photo2.jpg", "https://example.com/photo3.jpg"], "I'm a software developer who enjoys traveling, hiking, and playing guitar. Looking for someone who is tech-savvy and adventurous!",
            "B.S. Computer Science, University of Texas at Austin", "Software Developer at a tech company", "jack_davis", "jack_davis", ["Sophia", "Emily", "Olivia"], ["John", "David", "Michael"], [{"sender": "Sophia", "message": "Hi Jack, what's your favorite coding language?"}, {"sender": "Emily", "message": "Hey Jack, what's your favorite travel destination?"}], ["Jessica"]),
    Profile("Oliver Lee", 29, "Male", "Seattle, WA", 10, "Product Manager", ["Traveling", "Hiking", "Playing basketball", "Reading"], ["https://example.com/photo1.jpg", "https://example.com/photo2.jpg", "https://example.com/photo3.jpg"], "I'm a product manager who loves to travel, hike, and play basketball. Looking for someone who is intellectual and adventurous!",
            "B.S. Business Administration, University of Washington", "Product Manager at a tech company", "oliver_lee", "oliver_lee", ["Jessica", "Sophia", "Emily"], ["David", "Michael", "John"], [{"sender": "Jessica", "message": "Hey Oliver, what's your favorite book?"}, {"sender": "Sophia", "message": "Hi Oliver, what's your favorite travel destination?"}], []),
    Profile("Isabella Nguyen", 28, "Female", "San Francisco, CA", 5, "UX Designer", ["Traveling", "Hiking", "Drawing", "Watching movies"], ["https://example.com/photo1.jpg", "https://example.com/photo2.jpg", "https://example.com/photo3.jpg"], "I'm a UX designer who loves to travel, hike, and draw. Looking for someone who is creative and curious!",
            "B.A. Cognitive Science, University of California, Berkeley", "UX Designer at a tech company", "isabella_nguyen", "isabella_nguyen", ["Emily", "Jessica", "Sophia"], ["David", "Michael", "John"], [{"sender": "Emily", "message": "Hey Isabella, what's your favorite travel destination?"}, {"sender": "Jessica", "message": "Hi Isabella, what's your favorite drawing style?"}], []),
    Profile("Ethan Jones", 31, "Male", "New York, NY", 10, "Investment Banker", ["Traveling", "Hiking", "Playing tennis", "Fine dining"], ["https://example.com/photo1.jpg", "https://example.com/photo2.jpg", "https://example.com/photo3.jpg"], "I'm an investment banker who enjoys traveling, hiking, playing tennis, and fine dining. Looking for someone who is sophisticated and ambitious!",
            "B.A. Economics, Columbia University", "Investment Banker at a bank", "ethan_jones", "ethan_jones", ["Sophia", "Emily", "Olivia"], ["Michael", "David", "John"], [{"sender": "Sophia", "message": "Hi Ethan, what's your favorite restaurant in the city?"}, {"sender": "Emily", "message": "Hey Ethan, what's your favorite travel destination?"}], []),
]


def match_algorithm(user_profile, potential_match):
    score = 0
    
    # Check if potential match is within distance range
    if user_profile.distance >= potential_match.distance:
        score += 5
    
    # Check if potential match has any common interests with user
    common_interests = set(user_profile.interests).intersection(potential_match.interests)
    if common_interests:
        score += 10
    
    # Check if potential match is of opposite gender
    if user_profile.gender != potential_match.gender:
        score += 15
    
    # Check if potential match is within age range
    if user_profile.age - 5 <= potential_match.age <= user_profile.age + 5:
        score += 20
    
    # Check if potential match is in same location
    if user_profile.location == potential_match.location:
        score += 10
    
    return score


# Example usage
for user in profiles:
    print(f"Matching for {user.name}...")
    user_matches = match_algorithm(user, profiles)
    for potential_match, score in user_matches.items():
        if score >= 30:
            print(f"{user.name} matched with {potential_match.name} with score {score}")

class Song:
    def __init__(self, name, time, genre, album):
        self.name = name
        self.time = time
        self.genre = genre
        self.album = album

    def __str__(self):
        return self.name



class Artist:
    def __init__(self, name, overall_genre, about, verified=False, total_streams=0):
        self.name = name
        self.streams = total_streams
        self.overall_genre = overall_genre
        self.about = about
        self.verified = verified
        self.songs = []
    

    def add_song(self, s):
        for i in self.songs:
            if i.name == s.name:
                return "Song already in catalog."
        self.songs.append(s)

    def add_streams(self, s):
        self.streams += s

    def verify(self):
        self.verified = True
    
    def change_name(self, newName):
        self.name = newName

    def __str__(self):
        return self.name


artist1 = Artist("Dr. Dre", "Rap", "Compton rapper")
artist2 = Artist("Kanye West", "Hip-Hop", "Self-proclaimed GOD")
artist3 = Artist("Youngboy", "Rap", "Has 7 baby mamas")

song1 = Song("The Next Episode", "3:42", "Rap", "2001")
song2 = Song("Untouchable", "3:00", "Rap", "AI Youngboy")
song3 = Song("Heartless", "3:31", "Hip-Hop", "808s & Heartbreak")
song4 = Song("Off The Grid", "5:39", "Hip-Hop", "Donda")
song5 = Song("Outside Today", "2:09", "Rap", "Until Death Call My Name")

artist1.add_song(song1)
artist3.add_song(song2)
artist2.add_song(song3)
artist2.add_song(song4)
artist3.add_song(song5)

artist1.verify()
artist2.verify()
artist3.verify()

artist1.add_streams(100)
artist2.add_streams(200)
artist3.add_streams(50)

print(artist2.songs[1])
print(artist2.songs[1].album)
print("Verified:", artist2.verified)
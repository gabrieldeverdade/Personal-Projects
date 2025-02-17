from pytubefix.cli import on_progress
from pytubefix import YouTube

# Inserir URL do vídeo
url = "url"

# Mudar resolução de acordo com o vídeo
RES = '2160p'

yt = YouTube(url, on_progress_callback = on_progress)

for idx,i in enumerate(yt.streams):
   if i.resolution ==RES:
      print(idx)
      print(i.resolution)
      break
   
print(yt.streams[idx])
yt.streams[idx].download()
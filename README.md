# CloudComputing
Proiect cloud computing 2020- SIMPRE

Introducere si descrierea problemei:

In ziua de astăzi realizarea aplicațiilor a devenit din ce in ce mai ușoara datorita integrării acestora cu API-uri deja existente. 
Aplicatia dezvoltata de mine foloseste doua API-uri  si permite utilizatorului sa isi creeze propriul plylist de melodii, tot ce trebuie sa faca este sa caute artistul preferat cu ajutorul obiectului de cautare, iar prin intermediul  butonului de Add/ Remove to playlist artistul impreuna cu melodia preferata sunt adaugate in lista de preferinte muzicale. De asemenea, utilizatorul are posibilitatea, prin intermediul butonului Get lyrics sa vada versurile unei melodi.


Descriere API:

Aplicatia foloseste doua API-uri: 
API-ul Itunes (https://affiliate.itunes.apple.com/resources/documentation/itunes-store-web-service-search-api/ ) este unul public, care nu necesita autentificare si autorizare de servicii, acesta prin intermediul metodei HTTP GET aduce informatii precum: numele artistului, poza, numele melodiei, albumul din care face parte, data lansarii etc. Un exemplu care imi intoarce informaii despre artistul: Rihana 

POZA POST MAN 1


Cel de-al doilea API folosit in cadrul aplicatiei este https://apiseeds.com/documentation/lyrics, acesta este de asemenea un api public, insa spre deosebire de cel anterior necesita un apikey. Prin intermediul metodei HTTP GET aduce in cadrul aplicației versurile melodiei si informatii despre limba in care este cantata melodia.  Un exemplu de request pentru artistul: Rihanna si melodia: Diamonds

POZA 2


Flux de date:

Primul flux de date este realizat atunci când aplicația face call-ul prin intermediul URL-ului si al parametrilor către API-ul public. Cel de-al doilea flux îl reprezintă fișierul JSON ce vine ca raspuns, acesta fiind trimis de catre API.


Descriere aplicatie:
Utilizatorul caută in search object-ul din dreapta ecranului numele artistului urmand sa ii apara o lista cu melodiile si albumele acestuia:
POZA 1 APP

















import json

def get_data():
    with open('texts2.json', 'r', encoding='utf8') as f:
        texts = json.load(f)
        return texts

def get_text_from_id(_id, texts):
    t = texts['texts']
    for i in t:
        if i['id'] == _id:
            return i['text_en']

    return None


# db = {
#     "texts": [
#         {
#             "id": 1,
#             "title_en": "Politechnics overview",
#             "text_en": "Warsaw University of Technology is a public polytechnic founded in 1915 in Warsaw on the initiative and as a result of many years of efforts by the Warsaw Scientific Society with the consent of the governor, General Hans von Beseler. It is one of the largest and best technical universities in Poland and Central and Eastern Europe. For years The Warsaw University of Technology has been ranked 1st in Poland in the Ranking of Higher Schools among technical universities published by the monthly Perspektywy. According to the webometric ranking of universities of the world from January 2019, showing the involvement of academic institutions in the Internet, the university is ranked first in Poland among technical universities, and in the world 503 among all types of universities. The official date of establishing the Warsaw University of Technology is 1915, but from 1898 there was the Polytechnic Institute in Warsaw with Russian as the language of instruction. The university dates back to 1826, when the Preparatory School for the Polytechnic Institute was established. The main University of Technology complex is located in the center of Warsaw. It is the area between Aleja Niepodległości, Aleja Armii Ludowej and the streets of Polna, Noakowskiego and Koszykowa. The main building at the Politechnika Square is occupied by the Main Building, which houses the faculties of AiNS, Electrical and GiK. The buildings of the departments of Chemistry, EiTI, Physics, IL, WIBHiIŚ, MiNI, MEiL and Transport are located around. Near the Main Campus there are also the Faculty of Architecture at Koszykowa Street and the Faculty of IChiP, DS Riviera and DS Mikrus at Waryńskiego Street. The University of Technology has a branch in Płock. It houses the Faculty of Civil Engineering, Mechanics and Petrochemistry, the College of Economic and Social Sciences, DS Wcześniak, and other facilities (sports, teaching, laboratories).",
#             "title_pl": "Krótki opis uczelni",
#             "text_pl": "Politechnika Warszawska jest politechniką publiczną założoną w 1915 roku w Warszawie z inicjatywy iw wyniku wieloletnich starań Towarzystwa Naukowego Warszawskiego za zgodą gubernatora gen. Hansa von Beselera. Jest jedną z największych i najlepszych uczelni technicznych w Polsce i Europie Środkowo-Wschodniej. Politechnika Warszawska od lat zajmuje 1. miejsce w Polsce w Rankingu Szkół Wyższych wśród uczelni technicznych miesięcznika Perspektywy. Według webometrycznego rankingu uczelni świata ze stycznia 2019 r., pokazującego zaangażowanie instytucji akademickich w Internecie, uczelnia zajmuje pierwsze miejsce w Polsce wśród uczelni technicznych, a na świecie 503 wśród wszystkich typów uczelni. Oficjalną datą powstania Politechniki Warszawskiej jest rok 1915, ale od 1898 istniał w Warszawie Instytut Politechniczny z językiem wykładowym rosyjskim. Uczelnia powstała w 1826 roku, kiedy powstała Szkoła Przygotowawcza do Instytutu Politechnicznego. Główny kompleks Politechniki znajduje się w centrum Warszawy. Jest to obszar pomiędzy Aleją Niepodległości, Aleją Armii Ludowej a ulicami Polną, Noakowskiego i Koszykową. Gmach Główny przy Placu Politechniki zajmuje Gmach Główny, w którym mieszczą się wydziały AiNS, Elektryczny i GiK. Wokół zlokalizowane są budynki wydziałów Chemii, EiTI, Fizyki, IL, WIBHiIŚ, MiNI, MEiL i Transportu. W pobliżu Kampusu Głównego znajdują się również Wydział Architektury przy ul. Koszykowej oraz Wydział IChiP, DS Riviera i DS Mikrus przy ul. Waryńskiego. Politechnika posiada filię w Płocku. Mieści się w nim Wydział Budownictwa, Mechaniki i Petrochemii, Wyższa Szkoła Nauk Ekonomicznych i Społecznych, DS Wcześniak oraz inne obiekty (sportowe, dydaktyczne, laboratoria)."
#         },
#         {
#             "id": 2,
#             "title_en": "Buildings locations",
#             "text_en": "The main complex of the University of Technology is located in the center of Warsaw. It is the area between Aleja Niepodległości, Aleja Armii Ludowej and the streets: Polna, Noakowskiego and Koszykowa. A key place at the Politechnika Square is occupied by the Main Building, which houses the faculties of AiNS, Electrical and GiK. The buildings of the departments of Chemistry, EiTI, Physics, IL, WIBHiIŚ, MiNI, MEiL and Transport are located around. In the vicinity of the Main Campus there are also the Faculty of Architecture at Koszykowa Street and the Faculty of IChiP, DS Riviera and DS Mikrus at Waryńskiego Street. In addition, the University of Technology includes the buildings of the Southern Campus located in Mokotów, departments of Management, IP, SiMR, Mechatronics, IM, DS Żaczek, Stodoła club, Syrenka Stadium, DS Akademik in Ochota, DS Tulipan, DS Pineska, DS Bratniak, DS Muszelka, DS Babilon and in other parts of Warsaw (DS Sezam, DS Ustronie, DS Tatrzańska, residential buildings. The University of Technology has a branch in Płock. There is the Faculty of Civil Engineering, Mechanics and Petrochemistry, College of Economic and Social Sciences, DS Wcześniak, and other facilities ( sports, teaching, laboratories",
#             "title_pl": "Położenie placówek",
#             "text_pl": "Główny kompleks Politechniki położony jest w centrum Warszawy. Jest to obszar między aleją Niepodległości, aleją Armii Ludowej oraz ulicami Polną, Noakowskiego i Koszykową. Kluczowe miejsce przy placu Politechniki zajmuje Gmach Główny, w którym mieszczą się wydziały AiNS, Elektryczny oraz GiK. Dookoła znajdują się budynki wydziałów Chemicznego, EiTI, Fizyki, IL,WIBHiIŚ, MiNI, MEiL oraz Transportu. W pobliżu Kampusu Głównego znajdują się także Wydział Architektury przy ulicy Koszykowej oraz Wydział IChiP, DS Riviera i DS Mikrus przy ulicy Waryńskiego. Oprócz tego do Politechniki należą budynki Kampusu Południowego położone na Mokotowie wydziały Zarządzania, IP, SiMR, Mechatroniki, IM, DS Żaczek, klub „Stodoła”, Stadion Syrenka, na Ochocie DS Akademik, DS Tulipan, DS Pineska, DS Bratniak, DS Muszelka, DS Babilon oraz w innych częściach Warszawy (DS Sezam, DS Ustronie, DS Tatrzańska, budynki mieszkalne. Politechnika posiada filię w Płocku. Znajduje się tam Wydział Budownictwa, Mechaniki i Petrochemii, Kolegium Nauk Ekonomicznych i Społecznych, DS Wcześniak, a także inne obiekty (sportowe, dydaktyczne, laboratoria"
            
#         },
#         {
#             "id": 3,
#             "title_en": "About university",
#             "text_en": "We are one of the best and best in Poland. For years, we have been educating successive generations of engineers and not only engineers, and we conduct important research aimed at technical support of technical sciences. Our group of people are - students, doctoral students, employees, graduates - creative, committed, passionate, fulfilling functions, having access, successes, open to the needs of society and ready for the challenges of the present day. That is why we constantly generate our tresy and com. We want the University of Technology to be not only a university, but also a center of innovation and entrepreneurship, and a valued partner in research and business.",
#             "title_pl": "O uczelni",
#             "text_pl": "Jesteśmy jedną z największych i najlepszych uczelni w Polsce. Od lat kształcimy kolejne pokolenia inżynierów i nie tylko inżynierów oraz prowadzimy ważne badania, głównie z obszaru nauk technicznych. Naszą największą dumą są ludzie - studenci, doktoranci, pracownicy, absolwenci - kreatywni, zaangażowani, pełni pasji, realizujący wyjątkowe projekty, odnoszący sukcesy, otwarci na potrzeby społeczeństwa i gotowi sprostać wyzwaniom współczesności. Dlatego cały czas rozwijamy nasze kompetencje i infrastrukturę. Zależy nam, by Politechnika była znana nie tylko jako uczelnia, ale także jako ośrodek innowacyjności i przedsiębiorczości oraz ceniony partner do współpracy badawczej i biznesowej."
#         }
#     ] 
# }

# with open('texts2.json', 'w', encoding='utf8') as f:
#     json.dump(db, f, indent=True, ensure_ascii=False)


# print(get_data())
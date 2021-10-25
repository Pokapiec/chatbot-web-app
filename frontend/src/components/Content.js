import React from 'react';

export default function Content() {
    const triggerDarkMode = () => {
        const html = document.querySelector("html");
        html.classList.toggle("dark");
    }

    return (
        <div className="content-site grid md:grid-cols-3 dark:bg-gray-800 dark:text-gray-200">
            <div className="text-center px-10 m-3 col-span-3 ">
                <button type="button" className="classic-btn bg-gray-300 dark:bg-gray-600 text-gray-500 dark:text-gray-200 hover:bg-green-200 dark:hover:bg-green-500 h-12 w-12 z-1 transition duration-300 ease-in-out" onClick={triggerDarkMode}>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                </button>
            </div>

            <div className="text-center text-2xl p-10  m-3 col-span-3 ">Warsaw institute of technology information</div>
            <div className="text-center p-10 border-2 dark:border-black shadow-xl m-3 rounded-lg md:row-span-3 col-span-3 md:col-span-2 ">
                <div>
                    Warsaw University of Technology is a public polytechnic founded in 1915 in Warsaw on the initiative and as a result of many years of efforts by the Warsaw Scientific Society with the consent of the governor, General Hans von Beseler. It is one of the largest and best technical universities in Poland and Central and Eastern Europe. For years The Warsaw University of Technology has been ranked 1st in Poland in the "Ranking of Higher Schools" among technical universities published by the monthly "Perspektywy".

                </div>
                <div>
                    According to the webometric ranking of universities of the world from January 2019, showing the involvement of academic institutions in the Internet, the university is ranked first in Poland among technical universities, and in the world 503 among all types of universities.

                    The official date of establishing the Warsaw University of Technology is 1915, but from 1898 there was the Polytechnic Institute in Warsaw with Russian as the language of instruction. The university dates back to 1826, when the Preparatory School for the Polytechnic Institute was established. The main University of Technology complex is located in the center of Warsaw. It is the area between Aleja Niepodległości, Aleja Armii Ludowej and the streets of Polna, Noakowskiego and Koszykowa. The main building at the Politechnika Square is occupied by the Main Building, which houses the faculties of AiNS, Electrical and GiK. The buildings of the departments of Chemistry, EiTI, Physics, IL, WIBHiIŚ, MiNI, MEiL and Transport are located around. Near the Main Campus there are also the Faculty of Architecture at Koszykowa Street and the Faculty of IChiP, DS "Riviera" and DS Mikrus at Waryńskiego Street.
                </div>

                The University of Technology has a branch in Płock. It houses the Faculty of Civil Engineering, Mechanics and Petrochemistry, the College of Economic and Social Sciences, DS Wcześniak, and other facilities (sports, teaching, laboratories).
            </div>
            <div className="text-center text-2xl py-3 px-10 border-2 dark:border-black shadow-xl m-3 rounded-lg col-span-3 md:col-span-1">
                <img className="my-5" src='https://www.galczynski.com/wp-content/uploads/T3S-Galczynski_com-Warszawa-Politechnika-5344-1500px.jpg'></img>
            </div>

            <div className="text-center text-2xl p-10 border-2 dark:border-black shadow-xl m-3 rounded-lg col-span-3 md:col-span-1">Info</div>
            <div className="text-center text-2xl p-10 border-2 dark:border-black shadow-xl m-3 rounded-lg col-span-3 md:col-span-1">Info</div>

        </div>
    );
}




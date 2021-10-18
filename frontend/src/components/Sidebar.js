
export default function Sidebar({ onHideClick }) {
    return (
        <div className="border bg-gray-300 h-full w-56 fixed top-0 left-0 flex  flex-col" >
            <button type="button" className="border classic-btn bg-gray-100 text-gray-500 hover:bg-gray-400 h-12 w-12 m-2" onClick={onHideClick}>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clip-rule="evenodd"/>
                </svg>
            </button>
            <div className="bg-gray-100 rounded-lg p-2 m-2">Chatbot BERT</div>
            <div className="bg-gray-100 rounded-lg p-2 m-2">Chatbot Bag-Of-Words</div>
            <div className="bg-gray-100 rounded-lg p-2 m-2">Chatbot Word-Embedings-Class</div>
            <div className="bg-gray-100 rounded-lg p-2 m-2">Chatbot conversational</div>

        </div>
    )
}
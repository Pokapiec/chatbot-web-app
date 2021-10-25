
export default function Sidebar({ onHideClick }) {
    return (
        <div className="sidebar bg-gray-200 dark:bg-gray-600 h-full w-56 fixed flex flex-col inset-y-0 left-0 transform -translate-x-full transition duration-300 ease-in-out z-40">
            <button type="button" className="border classic-btn bg-gray-100 text-gray-500 hover:bg-green-100 h-12 w-12 ml-5 mt-5 mb-10" onClick={onHideClick}>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clip-rule="evenodd"/>
                </svg>
            </button>
            <div className="sidebar-elem">Chatbot BERT</div>
            <div className="sidebar-elem">Chatbot Bag-Of-Words</div>
            <div className="sidebar-elem">Chatbot Word-Embedings-Class</div>
            <div className="sidebar-elem">Chatbot conversational</div>

        </div>
    )
}
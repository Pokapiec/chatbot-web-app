
export default function SidebarToggler({ onHideClick }) {
    return (

        <button type="button" className="sidebar-toggler classic-btn bg-gray-300 dark:bg-gray-600 text-gray-500 dark:text-gray-200 hover:bg-green-200 dark:hover:bg-green-500 h-12 w-12 fixed top-5 left-5 transition duration-300 ease-in-out " onClick={onHideClick}>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
        </button>
    )
}
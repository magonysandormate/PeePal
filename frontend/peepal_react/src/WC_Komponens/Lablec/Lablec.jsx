export default function Lablec(){
    return(
        <footer className="bg-white dark:bg-gray-800">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-between">
                <div className="mb-6 md:mb-0">
                    <img src="/Logo.png" className="h-12 mt-7" alt="PeePal Logo" />
                </div>
                <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                    <div>
                        <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Kövess minket</h2>
                        <ul className="text-gray-500 dark:text-gray-400 font-medium">
                            <li className="mb-4">
                                <a href="https://git.gszi.edu.hu/magonysandormate/PeePal" className="hover:underline ">Nemes Gitea</a>
                            </li>
                            <li>
                                <a href="https://facebook.com/peepal" className="hover:underline">Facebook</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Elérhetőségek</h2>
                        <ul className="text-gray-500 dark:text-gray-400 font-medium">
                            <li className="mb-4">
                                <label className="hover:underline">peepal@gmail.com</label>
                            </li>
                            <li>
                                <label className="hover:underline">+36 30 123 4567</label>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <div className="sm:flex sm:items-center sm:justify-between">
                <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2025 PeePal™ Minden jog fenntartva.
                </span>
            </div>
            </div>
        </footer>
    )
}
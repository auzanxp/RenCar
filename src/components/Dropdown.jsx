import React, { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from 'lucide-react';
import useAppContext from '../contex/AppContex';



export default function DropDown({ value }) {
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(!show);

    const {
        logoutHandler,
    } = useAppContext();

    return (
        <div className="relative inline-block text-left">
            <div>
                <button
                    type="button"
                    className="bg-blue-600 text-white font-medium py-2 px-4 rounded-md shadow-md transition-all duration-300 hover:shadow-lg hover:bg-blue-500 inline-flex items-center"
                    id="options-menu"
                    onClick={() => handleShow()}
                >
                    {value}
                    {show ? <ChevronUpIcon className="w-5 h-5" /> : <ChevronDownIcon className="w-5 h-5" />}
                </button>
            </div>
            <div
                className={`${show ? 'block' : 'hidden'
                    } origin-top-right absolute right-0 mt-2 w-fit rounded-md shadow-lg bg-red-400 dark:bg-gray-800 ring-1 ring-black ring-opacity-5`}
            >
                <button onClick={logoutHandler} color="red" className='px-5 py-2'>
                    <span className="flex flex-col text-white">
                        <span>Logout</span>
                    </span>
                </button>
            </div>
        </div>
    );
}

import {Dropdown} from "flowbite-react";
import {useEffect, useState} from "react";
import AdminRequests from "../services/AdminRequests";


const ComplexSearch = () => {
    const [open, setOpen] = useState(false);
    const [categories, setCategories] = useState([]);
    const [alertType, setAlertType] = useState("");
    const [responseMessage, setResponseMessage] = useState("");
    const [search, setSearch] = useState("");
    const [focus, setFocus] = useState(false);

    const handleLoadingCategories = () => {

        debugger;
        AdminRequests.getAllCategories().then(
            (response) => {
                setResponseMessage("Categories loaded successfully.");
                setAlertType("success");
                console.log(response.data)
                setCategories(response.data);
            }).catch((error) => {
            setResponseMessage("Signup error: " + (error.response?.data?.message || error.message));
            console.log("Signup error: " + (error.response?.data?.message || error.message));
            setAlertType("failure");
        });
    };




    useEffect(() => {
        handleLoadingCategories();

    }, []);

    const getXgivenId = (id) => {
        return document.getElementById(id).getBoundingClientRect().left;
    }
    return (
        <div className="mx-auto mt-5 w-screen max-w-screen-md py-20 leading-6">
            <form
                className="relative flex w-full flex-col justify-between rounded-lg border p-2 sm:flex-row sm:items-center sm:p-0">
                <div className="flex">

                    <div className={"relative"}>

                        <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown"
                                onClick={(e) => setOpen(!open)}
                                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 h-full"

                                type="button">Filters <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                           viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                  d="M3 10h18M3 6h18M3 14h18M3 18h18"></path>
                        </svg>

                        </button>

                        <div id="dropdown"
                             className={`w-screen max-w-screen-md  absolute left-0 top-20   z-10 ${open ? "hidden" : "block"} bg-white divide-y divide-gray-100 rounded-lg shadow  dark:bg-gray-700`}>


                            <form action="" className="flex border-t border-gray-200 lg:border-t-0">
                                <fieldset className="w-full">
                                    <legend
                                        className="block w-full bg-gray-50 px-5 py-3 text-xs font-medium">Category
                                    </legend>

                                    <div className="space-y-2 px-5 py-6">
                                        {
                                            categories.map((category) => {
                                                console.log(category);
                                                return (
                                                    <div className="flex items-center">
                                                        <input id={category.id} type="checkbox" name="category"
                                                               className="h-5 w-5 rounded border-gray-300"/>

                                                        <label htmlFor={category.id}
                                                               className="ml-3 text-sm font-medium"> {category.name} </label>
                                                    </div>
                                                );
                                            })
                                        }
                                    </div>

                                </fieldset>

                                <fieldset className="w-full">
                                    <legend className="block w-full bg-gray-50 px-5 py-3 text-xs font-medium">Price
                                    </legend>
                                    <div className="space-y-2 px-5 py-6">
                                        <div className="flex items-center">
                                            <input id="biggerThan" type="radio" name="Price" value="biggerThan"
                                                   className="h-5 w-5 rounded border-gray-300"/>
                                            <label htmlFor="biggerThan" className="ml-3 text-sm font-medium"> Bigger
                                                than </label>
                                            <input type="number" className="ml-3 h-5 w-20 rounded border-gray-300"/>
                                        </div>
                                        <div className="flex items-center">
                                            <input id="lessThan" type="radio" name="Price" value="lessThan"
                                                   className="h-5 w-5 rounded border-gray-300"/>
                                            <label htmlFor="lessThan" className="ml-3 text-sm font-medium"> Less
                                                than </label>
                                            <input type="number" className="ml-3 h-5 w-20 rounded border-gray-300"/>
                                        </div>
                                        <div className="flex items-center">
                                            <input id="between" type="radio" name="Price" value="between"
                                                   className="h-5 w-5 rounded border-gray-300"/>
                                            <label htmlFor="between"
                                                   className="ml-3 text-sm font-medium"> Between </label>
                                            <input type="number" className="ml-3 h-5 w-20 rounded border-gray-300"/>
                                            <label className="ml-3 text-sm font-medium"> and </label>
                                            <input type="number" className="ml-3 h-5 w-20 rounded border-gray-300"/>
                                        </div>
                                    </div>
                                </fieldset>
                                <fieldset className="w-full">
                                    <legend className="block w-full bg-gray-50 px-5 py-3 text-xs font-medium">Sorting
                                    </legend>
                                    <div className="space-y-2 px-5 py-6">
                                        <div className="flex items-center">
                                            <input id="ascending" type="radio" name="Sorting" value="ascending"
                                                   className="h-5 w-5 rounded border-gray-300"/>
                                            <label htmlFor="ascending"
                                                   className="ml-3 text-sm font-medium"> Ascending </label>
                                        </div>
                                        <div className="flex items-center">
                                            <input id="descending" type="radio" name="Sorting" value="descending"
                                                   className="h-5 w-5 rounded border-gray-300"/>
                                            <label htmlFor="descending"
                                                   className="ml-3 text-sm font-medium"> Descending </label>
                                        </div>
                                    </div>
                                </fieldset>
                            </form>
                            <div className="">
                                <div className="flex justify-between border-t border-gray-200 px-5 py-3">
                                    <button name="reset" type="button"
                                            className="rounded text-xs font-medium text-gray-600 underline">Reset
                                        All
                                    </button>

                                    <button name="commit" type="button"
                                            onClick={(e) => {
                                                setOpen(!open)
                                            }}
                                            className="rounded bg-blue-600 px-5 py-3 text-xs font-medium text-white active:scale-95">Apply
                                        Filters
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div id={"search"} className={"relative"}>

                    <input type="name" name="search"
                           onChange={(e) => {
                               e.preventDefault();
                               setSearch(e.target.value);

                           }}
                           onFocus={(e) => { setFocus(true)}}
                            onBlur={(e) => { setFocus(false)}}
                           className="ml-1 h-14 w-full cursor-text rounded-md border py-4 pl-6 outline-none ring-emerald-200 sm:border-0 sm:pr-40 sm:pl-12 focus:ring "
                           placeholder="Course name"/>


                </div>
                    <div id={"results"}
                         className={`absolute top-32 sm:top-12  -left-6  w-screen max-w-screen-md ${focus ? "block " : "hidden"} `}


                    >

                        <div className="mt-4 divide-y rounded-b-xl border px-4 shadow-lg sm:mr-32 sm:ml-28">
                            <div
                                className="cursor-pointer px-4 py-2 text-gray-600 hover:bg-emerald-400 hover:text-white"><span
                                className="m-0 font-medium">Ca</span> <span>lifornia</span></div>
                            <div
                                className="cursor-pointer px-4 py-2 text-gray-600 hover:bg-emerald-400 hover:text-white"><span
                                className="m-0 font-medium">Ca</span> <span>nada</span></div>
                            <div
                                className="cursor-pointer px-4 py-2 text-gray-600 hover:bg-emerald-400 hover:text-white"><span
                                className="m-0 font-medium">Ca</span> <span>mbodia</span></div>
                            <div
                                className="cursor-pointer px-4 py-2 text-gray-600 hover:bg-emerald-400 hover:text-white"><span
                                className="m-0 font-medium">Ca</span> <span>meo</span></div>
                            <div
                                className="cursor-pointer px-4 py-2 text-gray-600 hover:bg-emerald-400 hover:text-white"><span
                                className="m-0 font-medium">Ca</span> <span>rsville</span></div>
                        </div>

                    </div>

                </div>
                <button type="submit"
                        className="mt-2 inline-flex h-12 w-full items-center justify-center rounded-md bg-emerald-500 px-10 text-center align-middle text-base font-medium normal-case text-white outline-none ring-emerald-200 ring-offset-1 sm:absolute sm:right-0 sm:mt-0 sm:mr-1 sm:w-32 focus:ring">Search
                </button>
            </form>
        </div>
    );
}

export default ComplexSearch;
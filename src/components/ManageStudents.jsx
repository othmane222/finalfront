import { Button, Checkbox, Label, TextInput ,Textarea} from "flowbite-react";
import {useEffect, useState} from "react";
import AdminRequests from "../services/AdminRequests";
import {Card} from "flowbite-react";

const ManageStudents = () => {
    const[categories, setCategories] = useState([]);
    const [SearchName, setSearchName] = useState("");
    const [alertType, setAlertType] = useState("success");
    const [responseMessage, setResponseMessage] = useState("");
    const [isCreated, setIsCreated] = useState(false);
    const [isUpdated, setIsUpdated] = useState(false);
    const [isDeleted, setIsDeleted] = useState(false);
    const [isSearching, setIsSearching] = useState(false);



    const handleLoadingCategories = () => {

        debugger;
        AdminRequests.getAllCategories().then(
            (response) => {
                setResponseMessage("Categories loaded successfully.");
                setAlertType("success");
                setCategories(response.data);
            }).catch((error) => {
            setResponseMessage("Signup error: " + (error.response?.data?.message || error.message));
            setAlertType("error");
        });
    };




    useEffect(() => {
        handleLoadingCategories();

    }, []);
    return (
        <div className="space-y-6">
            <div><h3 className="text-lg font-medium">Categories</h3><p
                className="text-sm text-muted-foreground">here, you can manage categories, create, update and view
                them.</p>
            </div>
            <div data-orientation="horizontal" role="none"
                 className="shrink-0 bg-border h-[1px] w-full"></div>
            <div className={"space-y-10"}>
                <h3 className={"text-lg font-medium"}>
                    Create Category
                </h3>
                <form>
                    <div className="space-y-10">
                        <div className={"space-y-6"}>
                            <Label htmlFor="category" value="Category Name" className={""}/>
                            <TextInput id="category" placeholder="Enter category name" required/>
                        </div>
                        <div className={"space-y-6"}>
                            <Label htmlFor="description" value="Description"/>
                            <Textarea id="description" placeholder="Enter category description" required/>
                        </div>
                        <Button size="xl" isProcessing={isCreated} outline onClick={
                            (e) => {
                                setIsCreated(true);

                                const Category = {};
                                Category.name = document.getElementById("category").value;
                                Category.description = document.getElementById("description").value;

                                console.log(Category)

                                console.log(AdminRequests)
                                AdminRequests.createCategory(Category);
                                setIsCreated(false);

                            }
                        }>
                            Create!
                        </Button>
                    </div>
                </form>


            </div>
            <div data-orientation="horizontal" role="none"
                 className="shrink-0 bg-border h-[1px] w-full"></div>
            <div className={"space-y-10"}>
                <h3 className={"text-lg font-medium"}>
                    Update Category
                </h3>
                <form>
                    <div className="space-y-10">
                        <div className={"space-y-6"}>
                            <Label htmlFor="category" value="category's previous name " className={"required:after:content-["*"] "}/>
                            <TextInput id="category" placeholder="Enter category name" required/>
                        </div>

                        <div className={"space-y-6"}>
                            <Label htmlFor="category" value="Category New Name" className={""}/>
                            <TextInput id="category" placeholder="Enter category name" required/>
                        </div>
                        <div className={"space-y-6"}>
                            <Label htmlFor="description" value=" New Description"/>
                            <Textarea id="description" placeholder="Enter category description"/>
                        </div>
                        <Button size="xl" isProcessing={isUpdated} outline onClick={
                            (e) => {

                                setIsUpdated(true);

                                const Category = {};
                                Category.name = document.getElementById("category").value;
                                Category.description = document.getElementById("description").value;

                                console.log(Category)

                                console.log(AdminRequests)
                                AdminRequests.createCategory(Category);
                                setIsUpdated(false);

                            }
                        }>
                            Update

                        </Button>
                    </div>
                </form>


            </div>

            <div>
                <div>
                    here goes search and update with delete
                </div>

                <form className="max-w-md mx-auto py-10">
                    <label htmlFor="default-search"
                           className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                    <div className="relative ">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true"
                                 xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                      stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                            </svg>
                        </div>
                        <input type="search" id="default-search"
                               className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50  focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ring-forth-flowbite"
                               placeholder="Search Mockups, Logos..." required/>
                        <button type="submit" onClick={(e) => {
                            e.preventDefault();
                            setSearchName(document.getElementById("default-search").value)}}
                                className="text-white absolute end-2.5 bottom-2.5  hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2  dark:hover:bg-blue-700 dark:focus:ring-forth-flowbite bg-forth-flowbite">Search
                        </button>
                    </div>
                </form>

                <div className={"container grid  grid-cols-1  gap-4  mx-auto space-y-6"}>
                    {
                        categories
                            .filter(category => SearchName.length === 0 ? true : category.name.includes(SearchName))
                            .map(
                                (category) => {
                                    console.log(category);
                                    return (
                                        <div>
                                            <Card href="#" className="md:w-4/10 ">
                                                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                                    {category.name}
                                                </h5>
                                                <p className="font-normal text-gray-700 dark:text-gray-400">
                                                    {category.description}
                                                </p>
                                            </Card>
                                        </div>
                                    )

                                }
                            )
                    }
                </div>
            </div>
        </div>
    )
}

export default ManageStudents;

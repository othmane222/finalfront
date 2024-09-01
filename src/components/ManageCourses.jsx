

const ManageCourses = () => {
    return (
        <div className="space-y-6">
            <div><h3 className="text-lg font-medium">Notifications</h3><p
                className="text-sm text-muted-foreground">Configure how you receive notifications.</p>
            </div>
            <div data-orientation="horizontal" role="none"
                 className="shrink-0 bg-border h-[1px] w-full"></div>
            <form className="space-y-8">
                <div className="space-y-3"><label
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    htmlFor=":r6d:-form-item">Notify me about...</label>
                    <div role="radiogroup" aria-required="false" dir="ltr"
                         className="gap-2 flex flex-col space-y-1" id=":r6d:-form-item"
                         aria-describedby=":r6d:-form-item-description" aria-invalid="false"
                         tabIndex="0">
                        <div className="flex items-center space-x-3 space-y-0">
                            <button type="button" role="radio" aria-checked="false"
                                    data-state="unchecked" value="all"
                                    className="aspect-square h-4 w-4 rounded-full border border-primary text-primary shadow focus:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                                    id=":r6e:-form-item" aria-describedby=":r6e:-form-item-description"
                                    aria-invalid="false" tabIndex="-1"
                                    data-radix-collection-item=""></button>
                            <input aria-hidden="true"

                                   tabIndex="-1" type="radio" value="all"/><label
                            className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 font-normal"
                            htmlFor=":r6e:-form-item">All new messages</label></div>
                        <div className="flex items-center space-x-3 space-y-0">
                            <button type="button" role="radio" aria-checked="false"
                                    data-state="unchecked" value="mentions"
                                    className="aspect-square h-4 w-4 rounded-full border border-primary text-primary shadow focus:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                                    id=":r6g:-form-item" aria-describedby=":r6g:-form-item-description"
                                    aria-invalid="false" tabIndex="-1"
                                    data-radix-collection-item=""></button>
                            <input aria-hidden="true"

                                   tabIndex="-1" type="radio" value="mentions"/><label
                            className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 font-normal"
                            htmlFor=":r6g:-form-item">Direct messages and mentions</label></div>
                        <div className="flex items-center space-x-3 space-y-0">
                            <button type="button" role="radio" aria-checked="false"
                                    data-state="unchecked" value="none"
                                    className="aspect-square h-4 w-4 rounded-full border border-primary text-primary shadow focus:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                                    id=":r6i:-form-item" aria-describedby=":r6i:-form-item-description"
                                    aria-invalid="false" tabIndex="-1"
                                    data-radix-collection-item=""></button>
                            <input aria-hidden="true"

                                   tabIndex="-1" type="radio" value="none"/><label
                            className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 font-normal"
                            htmlFor=":r6i:-form-item">Nothing</label></div>
                    </div>
                </div>
                <div><h3 className="mb-4 text-lg font-medium">Email Notifications</h3>
                    <div className="space-y-4">
                        <div
                            className="space-y-2 flex flex-row items-center justify-between rounded-lg border p-4">
                            <div className="space-y-0.5"><label
                                className="font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-base"
                                htmlFor=":r6k:-form-item">Communication emails</label><p
                                id=":r6k:-form-item-description"
                                className="text-[0.8rem] text-muted-foreground">Receive emails about
                                your account activity.</p></div>
                            <button type="button" role="switch" aria-checked="false"
                                    data-state="unchecked" value="on"
                                    className="peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input"
                                    id=":r6k:-form-item" aria-describedby=":r6k:-form-item-description"
                                    aria-invalid="false"><span data-state="unchecked"
                                                               className="pointer-events-none block h-4 w-4 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0"></span>
                            </button>
                            <input aria-hidden="true"

                                   tabIndex="-1" type="checkbox" value="on"/></div>
                        <div
                            className="space-y-2 flex flex-row items-center justify-between rounded-lg border p-4">
                            <div className="space-y-0.5"><label
                                className="font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-base"
                                htmlFor=":r6l:-form-item">Marketing emails</label><p
                                id=":r6l:-form-item-description"
                                className="text-[0.8rem] text-muted-foreground">Receive emails about new
                                products, features, and more.</p></div>
                            <button type="button" role="switch" aria-checked="false"
                                    data-state="unchecked" value="on"
                                    className="peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input"
                                    id=":r6l:-form-item" aria-describedby=":r6l:-form-item-description"
                                    aria-invalid="false"><span data-state="unchecked"
                                                               className="pointer-events-none block h-4 w-4 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0"></span>
                            </button>
                            <input aria-hidden="true"

                                   tabIndex="-1" type="checkbox" value="on"/></div>
                        <div
                            className="space-y-2 flex flex-row items-center justify-between rounded-lg border p-4">
                            <div className="space-y-0.5"><label
                                className="font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-base"
                                htmlFor=":r6m:-form-item">Social emails</label><p
                                id=":r6m:-form-item-description"
                                className="text-[0.8rem] text-muted-foreground">Receive emails for
                                friend requests, follows, and more.</p></div>
                            <button type="button" role="switch" aria-checked="true" data-state="checked"
                                    value="on"
                                    className="peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input"
                                    id=":r6m:-form-item" aria-describedby=":r6m:-form-item-description"
                                    aria-invalid="false"><span data-state="checked"
                                                               className="pointer-events-none block h-4 w-4 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0"></span>
                            </button>
                            <input aria-hidden="true"

                                   tabIndex="-1" type="checkbox" value="on" checked=""/></div>
                        <div
                            className="space-y-2 flex flex-row items-center justify-between rounded-lg border p-4">
                            <div className="space-y-0.5"><label
                                className="font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-base"
                                htmlFor=":r6n:-form-item">Security emails</label><p
                                id=":r6n:-form-item-description"
                                className="text-[0.8rem] text-muted-foreground">Receive emails about
                                your account activity and security.</p></div>
                            <button type="button" role="switch" aria-checked="true" data-state="checked"
                                    data-disabled="" disabled="" value="on"
                                    className="peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input"
                                    aria-readonly="true" id=":r6n:-form-item"
                                    aria-describedby=":r6n:-form-item-description" aria-invalid="false">
                                                <span data-state="checked" data-disabled=""
                                                      className="pointer-events-none block h-4 w-4 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0"></span>
                            </button>
                            <input aria-hidden="true" disabled=""

                                   tabIndex="-1" type="checkbox" value="on" checked=""/></div>
                    </div>
                </div>
                <div className="flex flex-row items-start space-x-3 space-y-0">
                    <button type="button" role="checkbox" aria-checked="false" data-state="unchecked"
                            value="on"
                            className="peer h-4 w-4 shrink-0 rounded-sm border border-primary shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
                            id=":r6o:-form-item" aria-describedby=":r6o:-form-item-description"
                            aria-invalid="false"></button>
                    <input aria-hidden="true"

                           tabIndex="-1" type="checkbox" value="on"/>
                    <div className="space-y-1 leading-none"><label
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        htmlFor=":r6o:-form-item">Use different settings for my mobile devices</label><p
                        id=":r6o:-form-item-description"
                        className="text-[0.8rem] text-muted-foreground">You can manage your mobile
                        notifications in the <a href="/examples/forms">mobile settings</a> page.</p>
                    </div>
                </div>
                <button
                    className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2"
                    type="submit">Update notifications
                </button>
            </form>
        </div>
    )
}

export default ManageCourses;

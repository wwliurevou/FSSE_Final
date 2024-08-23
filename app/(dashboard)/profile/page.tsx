import auth from '@/lib/auth'

export default async function Profile() {
    const user = await auth()

    return (
        <div className='bg-white p-6 mt-4 rounded-md shadow-md'>
            <div className="px-4 sm:px-0">
                <h3 className="text-base font-semibold leading-7 text-gray-900">Personal Information</h3>
                <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">Personal details .</p>
            </div>
            <div className="mt-6 border-t border-gray-100">
                <dl className="divide-y divide-gray-100">
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium leading-6 text-gray-900">Full name</dt>
                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                            {`${user?.first_name} ${user?.last_name}`}
                        </dd>
                    </div>

                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium leading-6 text-gray-900">Email address</dt>
                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                            {user?.email}
                        </dd>
                    </div>

                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium leading-6 text-gray-900">Phone</dt>
                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                            {user?.phone ?? "-"}
                        </dd>
                    </div>

                </dl>
            </div>
        </div>
    )
}

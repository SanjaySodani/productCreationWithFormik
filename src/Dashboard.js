import React from 'react'

function Dashboard() {
    return (
        <div className='container' style={{ height: "80vh" }}>
            <div className='row row-cols-1 align-items-center h-100'>
                <div className='col mx-auto'>
                    <div className='jumbotron my-auto'>
                        <p className='display-4'>Products</p>
                        <p className='text-lead'>Task - Product creation with CRUD using Axios.</p>
                        <hr className='my-4' />
                        <p>Use the nav links to see all products or create one. All details are required
                            and remember to add public link for the image.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard

import Counter from '@/components/Counter'
import React from 'react'

function HomeModule() {
    return (
        <div>
            <div className="p-8">
                <h1 className="text-3xl font-bold">Welcome to LMS</h1>
                <p className="mt-2 text-lg">Start your learning journey.</p>
            </div>
            <Counter />
        </div>
    )
}

export default HomeModule

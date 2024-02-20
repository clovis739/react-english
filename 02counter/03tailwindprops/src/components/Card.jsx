import React from 'react'

const Card = ({username = "clov", post = "Not assigned"}) => {
  return (
    <div>
        <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
    <img className="w-24 h-24 md:rounded-non rounded-full mx-auto" src="https://images.unsplash.com/photo-1526779259212-939e64788e3c?q=80&w=1174&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" width="384" height="512" />
    <div className="pt-6 md:p-8 text-center space-y-4">
        <blockquote>
        <p className="text-lg font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum minus facere nisi et quisquam distinctio, in ex quia esse animi amet iusto at ullam? Rem nisi inventore beatae perspiciatis dolorum.
        </p>
        </blockquote>
        <figcaption className="font-medium">
        <div className="text-sky-500 dark:text-sky-400">
            {username }
        </div>
        <div className="text-slate-700 dark:text-slate-500">
            Staff Engineer, Algolia
        </div>
        </figcaption>
    </div>
    </figure>
    </div>
  )
}

export default Card
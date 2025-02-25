import React from "react";

function Card({userName , post = "xYz"}) {
    console.log("Name", userName); 
    console.log("postion", post);
    


    return(
        <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800 mt-4">
        <img className="w-24 h-24 md:w-48 md:h-auto md:rounded-tl-3xl rounded-bl-3xl rounded-full mx-auto " src="https://images.pexels.com/photos/30635128/pexels-photo-30635128/free-photo-of-great-tit-on-lichen-covered-branch-in-autumn.jpeg" alt="" width="384" height="512"/>
          <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
            <blockquote>
              <p className="text-lg font-medium">
                “Tailwind CSS is the only framework that I've seen scale
                on large teams. It's easy to customize, adapts to any design,
                and the build size is tiny.”
              </p>
            </blockquote>
            <figcaption className="font-medium">
              <div className="text-sky-500 dark:text-sky-400">
                {userName}
              </div>
              <div className="text-slate-700 dark:text-slate-500">
                {post}
              </div>
            </figcaption>
          </div>
      </figure>

    )
    
}

export default Card
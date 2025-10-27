import inst_text_img from "../../../public/Instagram_text_logo.svg.png"

const TheNavbar = ()=> {
    return (
      <>
        <nav className="flex w-3/20 h-full flex-col border-r border-gray-100 bg-white fixed">
          <img
            src={inst_text_img}
            alt="Instagram_text_logo"
            className="w-32 my-5 pl-3 hover:cursor-pointer"
          />
          <div className="flex flex-col my-3 *:flex *:items-center *:py-3 *:pl-7 **:only:first:mr-3 font-semibold font-sans *:hover:bg-gray-200 *:active:-translate-x-4 *:hover:cursor-pointer">
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.5rem"
                height="1.5rem"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M4 19v-9q0-.475.213-.9t.587-.7l6-4.5q.525-.4 1.2-.4t1.2.4l6 4.5q.375.275.588.7T20 10v9q0 .825-.588 1.413T18 21h-3q-.425 0-.712-.288T14 20v-5q0-.425-.288-.712T13 14h-2q-.425 0-.712.288T10 15v5q0 .425-.288.713T9 21H6q-.825 0-1.412-.587T4 19"
                />
              </svg>
              Home
            </a>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.5rem"
                height="1.5rem"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="m19.6 21l-6.3-6.3q-.75.6-1.725.95T9.5 16q-2.725 0-4.612-1.888T3 9.5t1.888-4.612T9.5 3t4.613 1.888T16 9.5q0 1.1-.35 2.075T14.7 13.3l6.3 6.3zM9.5 14q1.875 0 3.188-1.312T14 9.5t-1.312-3.187T9.5 5T6.313 6.313T5 9.5t1.313 3.188T9.5 14"
                />
              </svg>
              Search
            </a>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.5rem"
                height="1.5rem"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="m8.375 16.25l5.05-1.45q.5-.15.863-.513t.512-.862l1.45-5.05q.075-.275-.137-.488t-.488-.137l-5.05 1.45q-.5.15-.862.513t-.513.862l-1.45 5.05q-.075.275.138.488t.487.137M12 13.5q-.625 0-1.062-.437T10.5 12t.438-1.062T12 10.5t1.063.438T13.5 12t-.437 1.063T12 13.5m0 8.5q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22m0-2q3.325 0 5.663-2.337T20 12t-2.337-5.663T12 4T6.337 6.338T4 12t2.338 5.663T12 20m0-8"
                />
              </svg>
              Explore
            </a>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.5rem"
                height="1.5rem"
                viewBox="0 0 24 24"
              >
                <g fill="none">
                  <path
                    stroke="currentColor"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M12.834 3.186a3.627 3.627 0 0 1 3.627 6.282l-.74.426a3.626 3.626 0 0 1 1.935 6.766l-7.02 4.053a3.626 3.626 0 1 1-3.627-6.28l.739-.428A3.627 3.627 0 0 1 5.814 7.24z"
                  />
                  <path
                    fill="currentColor"
                    d="M13.992 11.016L11.2 9.271c-.74-.463-1.7.07-1.7.942v3.49c0 .873.96 1.405 1.7.943l2.792-1.746a1.11 1.11 0 0 0 0-1.884"
                  />
                </g>
              </svg>
              Reels
            </a>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.5rem"
                height="1.5rem"
                viewBox="0 0 14 14"
              >
                <g
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="3.5" cy="7" r=".5" />
                  <circle cx="6.75" cy="7" r=".5" />
                  <circle cx="10" cy="7" r=".5" />
                  <path d="M7 .5a6.5 6.5 0 0 0-5.41 10.1L.5 13.5l3.65-.66A6.5 6.5 0 1 0 7 .5Z" />
                </g>
              </svg>
              Messages
            </a>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.5rem"
                height="1.5rem"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M12 20.325q-.35 0-.712-.125t-.638-.4l-1.725-1.575q-2.65-2.425-4.788-4.812T2 8.15Q2 5.8 3.575 4.225T7.5 2.65q1.325 0 2.5.562t2 1.538q.825-.975 2-1.537t2.5-.563q2.35 0 3.925 1.575T22 8.15q0 2.875-2.125 5.275T15.05 18.25l-1.7 1.55q-.275.275-.637.4t-.713.125M11.05 6.75q-.725-1.025-1.55-1.563t-2-.537q-1.5 0-2.5 1t-1 2.5q0 1.3.925 2.763t2.213 2.837t2.65 2.575T12 18.3q.85-.775 2.213-1.975t2.65-2.575t2.212-2.837T20 8.15q0-1.5-1-2.5t-2.5-1q-1.175 0-2 .538T12.95 6.75q-.175.25-.425.375T12 7.25t-.525-.125t-.425-.375m.95 4.725"
                />
              </svg>
              Notification
            </a>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.5rem"
                height="1.5rem"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M11 13v3q0 .425.288.713T12 17t.713-.288T13 16v-3h3q.425 0 .713-.288T17 12t-.288-.712T16 11h-3V8q0-.425-.288-.712T12 7t-.712.288T11 8v3H8q-.425 0-.712.288T7 12t.288.713T8 13zm-6 8q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21zm0-2h14V5H5zM5 5v14z"
                />
              </svg>
              Create
            </a>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.5rem"
                height="1.5rem"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M12 12q-1.65 0-2.825-1.175T8 8t1.175-2.825T12 4t2.825 1.175T16 8t-1.175 2.825T12 12m-8 8v-2.8q0-.85.438-1.562T5.6 14.55q1.55-.775 3.15-1.162T12 13t3.25.388t3.15 1.162q.725.375 1.163 1.088T20 17.2V20z"
                />
              </svg>
              Profile
            </a>
          </div>

          <div className="flex flex-col mt-20 *:flex *:items-center *:py-3 *:pl-7 **:only:first:mr-3 font-semibold font-sans *:hover:bg-gray-200 *:active:-translate-x-4 *:hover:cursor-pointer">
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.5rem"
                height="1.5rem"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M4 18q-.425 0-.712-.288T3 17t.288-.712T4 16h16q.425 0 .713.288T21 17t-.288.713T20 18zm0-5q-.425 0-.712-.288T3 12t.288-.712T4 11h16q.425 0 .713.288T21 12t-.288.713T20 13zm0-5q-.425 0-.712-.288T3 7t.288-.712T4 6h16q.425 0 .713.288T21 7t-.288.713T20 8z"
                />
              </svg>
              More
            </a>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.5rem"
                height="1.5rem"
                viewBox="0 0 8 8"
              >
                <path
                  fill="currentColor"
                  d="M0 5h1v1h1V5h1v3H0m4-3h1v1h1V5h1v3H4M2 1h1v1h1V1h1v3H2"
                />
              </svg>
              Also from meta
            </a>
          </div>
        </nav>
        <section className="col-span-3"></section>
      </>
    );
}

export default TheNavbar
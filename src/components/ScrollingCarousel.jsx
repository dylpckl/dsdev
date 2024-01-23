import Accordion from "/public/Accordion.png";

import Image from "next/image";

export default function ScrollingCarousel() {
  return (
    <div class="flex h-full w-full items-center justify-center">
      <div class="relative w-full max-w-screen-lg overflow-hidden">
        <div className="pointer-events-none absolute -top-1 z-10 h-20 w-full bg-gradient-to-b from-bg-slate-700/80 to-transparent" />
        <div class="pointer-events-none absolute -bottom-1 z-10 h-20 w-full bg-gradient-to-t from-bg-slate-700/80 to-transparent" />
        <div class="pointer-events-none absolute -left-1 z-10 h-full w-20 bg-gradient-to-r from-bg-slate-700/80 to-transparent" />
        <div class="pointer-events-none absolute -right-1 z-10 h-full w-20 bg-gradient-to-l from-bg-slate-700/80 to-transparent" />

        <div class="mx-auto grid h-[250px] w-[300px] animate-skewScroll grid-cols-1 gap-5 sm:w-[600px] sm:grid-cols-2">
          {/* These are all the same components - if you're using React, you can use a map to iterate through all of them */}

          <div class="flex cursor-pointer items-center space-x-2 rounded-md border border-gray-100 p-5 shadow-md transition-all hover:-translate-y-1 hover:translate-x-1 hover:scale-[1.025] hover:shadow-xl">
            <Image
              src={Accordion}
              alt="accordion"
            />
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="h-6 w-6 flex-none text-violet-600"
            >
              <circle
                cx="12"
                cy="12"
                r="10"
              />
              <path d="m9 12 2 2 4-4" />
            </svg> */}
            <p class="text-gray-600">xxxxxxxxxxxxxx</p>
          </div>
          <div class="flex cursor-pointer items-center space-x-2 rounded-md border border-gray-100 p-5 shadow-md transition-all hover:-translate-y-1 hover:translate-x-1 hover:scale-[1.025] hover:shadow-xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="h-6 w-6 flex-none text-violet-600"
            >
              <circle
                cx="12"
                cy="12"
                r="10"
              />
              <path d="m9 12 2 2 4-4" />
            </svg>
            <p class="text-gray-600">Priority support</p>
          </div>
          <div class="flex cursor-pointer items-center space-x-2 rounded-md border border-gray-100 p-5 shadow-md transition-all hover:-translate-y-1 hover:translate-x-1 hover:scale-[1.025] hover:shadow-xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="h-6 w-6 flex-none text-violet-600"
            >
              <circle
                cx="12"
                cy="12"
                r="10"
              />
              <path d="m9 12 2 2 4-4" />
            </svg>
            <p class="text-gray-600">Priority support</p>
          </div>
          <div class="flex cursor-pointer items-center space-x-2 rounded-md border border-gray-100 p-5 shadow-md transition-all hover:-translate-y-1 hover:translate-x-1 hover:scale-[1.025] hover:shadow-xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="h-6 w-6 flex-none text-violet-600"
            >
              <circle
                cx="12"
                cy="12"
                r="10"
              />
              <path d="m9 12 2 2 4-4" />
            </svg>
            <p class="text-gray-600">Priority support</p>
          </div>
          <div class="flex cursor-pointer items-center space-x-2 rounded-md border border-gray-100 p-5 shadow-md transition-all hover:-translate-y-1 hover:translate-x-1 hover:scale-[1.025] hover:shadow-xl">
            <Image
              src={Accordion}
              alt="accordion"
            />
            <p class="text-gray-600">Priority support</p>
          </div>
          <div class="flex cursor-pointer items-center space-x-2 rounded-md border border-gray-100 p-5 shadow-md transition-all hover:-translate-y-1 hover:translate-x-1 hover:scale-[1.025] hover:shadow-xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="h-6 w-6 flex-none text-violet-600"
            >
              <circle
                cx="12"
                cy="12"
                r="10"
              />
              <path d="m9 12 2 2 4-4" />
            </svg>
            <p class="text-gray-600">Priority support</p>
          </div>
          <div class="flex cursor-pointer items-center space-x-2 rounded-md border border-gray-100 p-5 shadow-md transition-all hover:-translate-y-1 hover:translate-x-1 hover:scale-[1.025] hover:shadow-xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="h-6 w-6 flex-none text-violet-600"
            >
              <circle
                cx="12"
                cy="12"
                r="10"
              />
              <path d="m9 12 2 2 4-4" />
            </svg>
            <p class="text-gray-600">Priority support</p>
          </div>
          <div class="flex cursor-pointer items-center space-x-2 rounded-md border border-gray-100 p-5 shadow-md transition-all hover:-translate-y-1 hover:translate-x-1 hover:scale-[1.025] hover:shadow-xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="h-6 w-6 flex-none text-violet-600"
            >
              <circle
                cx="12"
                cy="12"
                r="10"
              />
              <path d="m9 12 2 2 4-4" />
            </svg>
            <p class="text-gray-600">Priority support</p>
          </div>
          <div class="flex cursor-pointer items-center space-x-2 rounded-md border border-gray-100 p-5 shadow-md transition-all hover:-translate-y-1 hover:translate-x-1 hover:scale-[1.025] hover:shadow-xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="h-6 w-6 flex-none text-violet-600"
            >
              <circle
                cx="12"
                cy="12"
                r="10"
              />
              <path d="m9 12 2 2 4-4" />
            </svg>
            <p class="text-gray-600">Priority support</p>
          </div>
          <div class="flex cursor-pointer items-center space-x-2 rounded-md border border-gray-100 p-5 shadow-md transition-all hover:-translate-y-1 hover:translate-x-1 hover:scale-[1.025] hover:shadow-xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="h-6 w-6 flex-none text-violet-600"
            >
              <circle
                cx="12"
                cy="12"
                r="10"
              />
              <path d="m9 12 2 2 4-4" />
            </svg>
            <p class="text-gray-600">Priority support</p>
          </div>
          <div class="flex cursor-pointer items-center space-x-2 rounded-md border border-gray-100 p-5 shadow-md transition-all hover:-translate-y-1 hover:translate-x-1 hover:scale-[1.025] hover:shadow-xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="h-6 w-6 flex-none text-violet-600"
            >
              <circle
                cx="12"
                cy="12"
                r="10"
              />
              <path d="m9 12 2 2 4-4" />
            </svg>
            <p class="text-gray-600">Priority support</p>
          </div>
          <div class="flex cursor-pointer items-center space-x-2 rounded-md border border-gray-100 p-5 shadow-md transition-all hover:-translate-y-1 hover:translate-x-1 hover:scale-[1.025] hover:shadow-xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="h-6 w-6 flex-none text-violet-600"
            >
              <circle
                cx="12"
                cy="12"
                r="10"
              />
              <path d="m9 12 2 2 4-4" />
            </svg>
            <p class="text-gray-600">Priority support</p>
          </div>
          <div class="flex cursor-pointer items-center space-x-2 rounded-md border border-gray-100 p-5 shadow-md transition-all hover:-translate-y-1 hover:translate-x-1 hover:scale-[1.025] hover:shadow-xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="h-6 w-6 flex-none text-violet-600"
            >
              <circle
                cx="12"
                cy="12"
                r="10"
              />
              <path d="m9 12 2 2 4-4" />
            </svg>
            <p class="text-gray-600">Priority support</p>
          </div>
          <div class="flex cursor-pointer items-center space-x-2 rounded-md border border-gray-100 p-5 shadow-md transition-all hover:-translate-y-1 hover:translate-x-1 hover:scale-[1.025] hover:shadow-xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="h-6 w-6 flex-none text-violet-600"
            >
              <circle
                cx="12"
                cy="12"
                r="10"
              />
              <path d="m9 12 2 2 4-4" />
            </svg>
            <p class="text-gray-600">Priority support</p>
          </div>
          <div class="flex cursor-pointer items-center space-x-2 rounded-md border border-gray-100 p-5 shadow-md transition-all hover:-translate-y-1 hover:translate-x-1 hover:scale-[1.025] hover:shadow-xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="h-6 w-6 flex-none text-violet-600"
            >
              <circle
                cx="12"
                cy="12"
                r="10"
              />
              <path d="m9 12 2 2 4-4" />
            </svg>
            <p class="text-gray-600">Priority support</p>
          </div>
        </div>
      </div>
    </div>
  );
}

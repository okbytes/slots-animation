import {nanoid} from "nanoid"

export const Awsathena = () => {
    const id = nanoid()
    return (
        <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="64" height="64" rx="8" fill={`url(#${id})`} />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M30.2061 21.3096C33.8608 21.3096 35.8628 22.1233 36.2276 22.5313C35.8628 22.9393 33.8608 23.753 30.2061 23.753C26.5514 23.753 24.5497 22.9393 24.1847 22.5313C24.5497 22.1233 26.5514 21.3096 30.2061 21.3096ZM29.7903 27.822C29.6562 27.7536 29.5618 27.6175 29.5618 27.4563C29.5618 27.2299 29.7459 27.045 29.9712 27.045C30.0366 27.045 30.0963 27.0637 30.152 27.0922L29.7903 27.822ZM34.4957 34.5387C34.4351 34.5875 34.2962 34.6819 34.0101 34.7961C33.756 34.897 33.4546 34.9885 33.1133 35.068C32.2057 35.2798 31.0896 35.3962 29.9704 35.3962C27.5229 35.3962 25.8174 34.8711 25.45 34.5451L24.3655 24.4819C26.0281 25.1579 28.4773 25.3819 30.2061 25.3819C31.9059 25.3819 34.3017 25.1644 35.9637 24.5145L35.3151 28.9402C34.0934 28.4825 32.5688 27.8179 31.1243 27.1191C30.9773 26.6125 30.5194 26.2395 29.9712 26.2395C29.3058 26.2395 28.7648 26.786 28.7648 27.4563C28.7648 28.1282 29.3058 28.6739 29.9712 28.6739C30.1286 28.6739 30.2788 28.6413 30.4161 28.5859C32.4348 29.5763 33.9392 30.2115 35.0713 30.6033L34.4957 34.5387ZM22.5398 22.6192L23.8471 34.7482C23.9392 36.9992 29.7216 37.0254 29.9704 37.0254C31.2082 37.0254 32.4533 36.8934 33.4764 36.6554C33.8956 36.5578 34.275 36.442 34.6037 36.3111C35.5582 35.9298 36.059 35.4101 36.0935 34.7676L36.6379 31.0504C37.0086 31.1262 37.3112 31.1596 37.5527 31.1596C38.3126 31.1596 38.5127 30.8501 38.651 30.6367C38.7961 30.4119 38.8381 30.1358 38.7704 29.8581C38.6155 29.2195 37.7086 28.379 37.103 27.8798L37.8684 22.6502L37.8612 22.6494C37.8645 22.6095 37.8775 22.572 37.8775 22.5313C37.8775 20.281 33.055 19.6807 30.2061 19.6807C27.3573 19.6807 22.5349 20.281 22.5349 22.5313C22.5349 22.5614 22.5454 22.5883 22.5471 22.6184L22.5398 22.6192ZM29.8323 15.5156C36.8703 15.5156 42.5964 21.2909 42.5964 28.3896C42.5964 35.4884 36.8703 41.2638 29.8323 41.2638C22.7933 41.2638 17.0674 35.4884 17.0674 28.3896C17.0674 21.2909 22.7933 15.5156 29.8323 15.5156ZM9.61498 33.1191V34.7482H16.8825V34.6518C19.2056 39.5176 24.1297 42.8926 29.8323 42.8926C37.7603 42.8926 44.2112 36.3867 44.2112 28.3896C44.2112 20.3925 37.7603 13.8867 29.8323 13.8867C23.6638 13.8867 18.4062 17.8319 16.3681 23.3457H9.61498V24.9746H15.8723C15.6203 26.0228 15.4726 27.1101 15.4605 28.2324H8V29.8613H15.5267C15.6405 30.9926 15.8965 32.0791 16.2534 33.1191H9.61498ZM53.6244 52.6832C52.6472 53.6701 50.953 53.6759 49.9767 52.6919L41.3013 43.9406C42.6973 42.891 43.9434 41.6521 45.0117 40.2668L53.6342 49.0049C54.1194 49.4954 54.3865 50.1486 54.3849 50.8432C54.3843 51.5394 54.1145 52.192 53.6244 52.6832ZM54.7774 47.855L45.962 38.9197C47.9161 35.8852 49.0564 32.2706 49.0564 28.3896C49.0564 17.6975 40.4324 9 29.8323 9C22.2152 9 15.3078 13.543 12.2337 20.5742L13.7114 21.2306C16.5272 14.7908 22.8547 10.6289 29.8323 10.6289C39.5423 10.6289 47.4414 18.5959 47.4414 28.3896C47.4414 38.1827 39.5423 46.1505 29.8323 46.1505C23.3456 46.1505 17.4025 42.5692 14.3203 36.8045L12.8991 37.5783C16.2623 43.8708 22.7513 47.7793 29.8323 47.7793C33.5386 47.7793 37.0021 46.7132 39.9407 44.8726L48.8358 53.8444C49.6256 54.6409 50.6761 55.08 51.7923 55.08C52.9147 55.08 53.9716 54.6376 54.7647 53.8373C55.559 53.0405 55.9984 51.9786 56 50.8458C56.0023 49.7143 55.5672 48.6524 54.7774 47.855Z"
                fill="white"
            />
            <defs>
                <linearGradient
                    id={id}
                    x1="64"
                    y1="0"
                    x2="0"
                    y2="64"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop offset="0.0885417" stopColor="#8B55E8" />
                    <stop offset="0.817708" stopColor="#5E34BA" />
                </linearGradient>
            </defs>
        </svg>
    )
}

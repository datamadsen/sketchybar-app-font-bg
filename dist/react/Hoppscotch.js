import React from 'react';
export const Hoppscotch = props => (
  <svg viewBox="0 0 20 20"  {...props} className={`sketchybar-app-font-bg ${props.className ? props.className : ''}`}><path d="m28.394.064.32-.007C32.226.008 35.743.039 39.257.039L57.673.038c4.627 0 9.259-.044 13.884.023C75.7.12 80.04.114 84.08 1.119c3.461.861 6.578 2.751 9.119 5.232 6.737 6.574 6.624 13.659 6.74 22.435.125 9.431.018 18.919.017 28.358l-.018 13.74c-.049 4.372-.009 8.995-1.079 13.258-.872 3.469-2.78 6.562-5.266 9.108-6.37 6.522-13.298 6.583-21.842 6.68l-.195.005c-3.601.066-7.208.025-10.81.025l-18.096.002-11.441.001c-4.748-.005-10.746.065-15.33-1.094-3.451-.871-6.5-2.727-9.05-5.186C.324 87.41.21 80.621.063 72.174c-.036-3.69-.046-7.381-.03-11.071l.002-18.141c0-4.626-.035-9.255.019-13.88.051-4.337.012-8.929 1.066-13.16.864-3.467 2.754-6.564 5.228-9.119C12.775.169 19.772.2 28.394.064Zm20.42 25.707c-6.076.331-11.757 2.526-16.383 6.504-4.528-.925-11.234-1.307-15.228 1.319a7.494 7.494 0 0 0-.904.691c-.095.084-.187.17-.277.259a6.842 6.842 0 0 0-.515.558 7.493 7.493 0 0 0-1.023 1.592 7.633 7.633 0 0 0-.602 1.795c-.549 2.753.561 5.445 2.079 7.695 3.183 4.719 8.354 8.374 13.072 11.406a17.628 17.628 0 0 0 .263 1.028c.048.171.098.34.151.509a21.164 21.164 0 0 0 2.175 4.825 21.12 21.12 0 0 0 1.192 1.756 22.268 22.268 0 0 0 1.724 2.015 22.098 22.098 0 0 0 1.959 1.787 18.726 18.726 0 0 0 .843.645c.143.104.287.206.433.306a18.773 18.773 0 0 0 .888.581c4.096 2.521 9.345 3.796 14.132 3.016 2.708-.35 5.209-1.235 7.618-2.504 6.092 1.642 16.021 3.936 21.862.613 1.82-1.036 3.136-2.668 3.693-4.695.689-2.505-.077-5.035-1.34-7.219-1.885-3.257-4.789-5.851-7.686-8.187-.302-7.378-3.175-14.121-8.645-19.159a29.476 29.476 0 0 0-.991-.869 28.927 28.927 0 0 0-1.564-1.21 29.055 29.055 0 0 0-1.09-.742 27.26 27.26 0 0 0-3.468-1.897 25.054 25.054 0 0 0-1.828-.755 26.915 26.915 0 0 0-1.878-.619 28.461 28.461 0 0 0-1.275-.336 28.412 28.412 0 0 0-1.29-.274 28.38 28.38 0 0 0-1.955-.292 29.106 29.106 0 0 0-2.631-.167 29.041 29.041 0 0 0-1.319.013 6.18 6.18 0 0 0-.192.012Zm.29 5.459c1.675-.102 3.411.055 5.056.379 1.627.321 5.377 1.282 6.258 2.683.143.227.236.512.169.78-.233.941-2.122.847-2.87.896-.472.026-.941.081-1.407.164-1.004.181-2.017.487-2.888 1.031-1.078.674-1.925 1.747-2.204 3l-.028.135c-.009.045-.017.09-.024.136l-.019.136a3.37 3.37 0 0 0-.025.275l-.005.138a3.14 3.14 0 0 0 .002.275l.008.138a6.341 6.341 0 0 0 .03.274l.022.136a5.38 5.38 0 0 0 .057.27 5.161 5.161 0 0 0 .118.396l.049.129c.016.043.034.085.052.128.018.042.037.084.057.125.019.042.04.083.06.124l.065.122.069.119a3.324 3.324 0 0 0 .149.232c.027.038.053.075.081.112.027.037.055.073.084.109l.087.107.091.103.095.101.098.097.1.094c.79.707 2.373 1.261 3.36 1.718.967.453 1.929.915 2.887 1.386 6.479 3.18 17.169 9.289 21.037 15.43.606.963 1.222 2.22.922 3.386-.162.632-.643 1.073-1.196 1.38-4.038 2.243-13.614.001-17.816-1.199C49.934 62.94 27.573 53.13 20.667 43.439c-.733-1.028-1.685-2.6-1.429-3.923.125-.643.549-1.118 1.091-1.459 3.027-1.906 10.474-.706 13.837.084 3.99-4.173 9.169-6.607 14.938-6.911Zm-1.058 20.004c-.89.138-1.741.471-2.288 1.231-.441.61-.576 1.4-.432 2.132.212 1.073.967 1.993 1.873 2.572a4.842 4.842 0 0 0 3.063.76c.892-.148 1.739-.463 2.296-1.224.445-.608.589-1.376.454-2.112-.199-1.08-.932-1.995-1.832-2.591-.91-.602-2.046-.91-3.134-.768ZM32.812 42.44c-.859.121-1.675.409-2.229 1.122-.471.604-.623 1.388-.502 2.137.183 1.137.934 2.149 1.869 2.793.925.637 1.894.867 3.004.838.853-.143 1.642-.433 2.174-1.159.459-.627.577-1.413.448-2.167-.189-1.113-.953-2.106-1.871-2.731a4.7 4.7 0 0 0-2.893-.833Zm32.321 14.436c-1.016.112-1.996.434-2.655 1.271-.028.035-.054.07-.079.107-.025.036-.05.072-.073.11a1.62 1.62 0 0 0-.067.114 1.63 1.63 0 0 0-.062.117c-.02.039-.038.079-.056.119-.018.041-.034.082-.05.123a2.628 2.628 0 0 0-.153.642 1.957 1.957 0 0 0-.011.132c-.003.044-.004.088-.005.132a2.905 2.905 0 0 0 .026.395c.13.975.77 1.82 1.55 2.385 1.004.726 2.153.956 3.371.88.96-.16 1.866-.505 2.453-1.331.025-.037.05-.074.073-.111.024-.037.046-.075.068-.114l.062-.117c.02-.04.038-.08.056-.12a2.115 2.115 0 0 0 .094-.248 2.43 2.43 0 0 0 .113-.518c.005-.044.01-.088.013-.132l.005-.133a1.971 1.971 0 0 0-.001-.133c-.001-.044-.004-.088-.007-.132l-.014-.132a2.751 2.751 0 0 0-.021-.131c-.179-1.001-.854-1.847-1.688-2.397a4.851 4.851 0 0 0-1.038-.515 4.657 4.657 0 0 0-.747-.198 4.99 4.99 0 0 0-.77-.075 4.545 4.545 0 0 0-.387.01Z" fillRule="evenodd" /></svg>
);

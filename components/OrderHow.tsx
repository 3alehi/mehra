import React from 'react';

const OrderHow: React.FC = () => {
    return (
        <div className='border rounded-2xl w-fit p-1 px-1'>
            <div className='relative'>
            <img
            alt='img'
            src={"https://s3-alpha-sig.figma.com/img/eeb6/3320/dd3fddaccec4c19a338419525424b67f?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ftr8Fr-BC-1mtfneCNuQYWsr8xsKotam1yhXSk5uM5-PAbYctRO7C5UCO5la01ZDqbiXPQyxYi3T1RG44fFrEEJHUQ5fclxr9wFKfv791T5CV5Cy1si0ZxMHOakf5tJx74AYiKEXW07n3CoI0inyV0W~xRFryh5Dl8yrpzkPvNy93ovuIz-~FKHUwFkTV10AQfy0pHlphUDxm1BAgIcYMZdauDfr3P-v7DRM08QOVMdcryk2R6It7419J~JXSqcTpIhpOQIFOvn95MvRoGbGZIi7hXIKaKnndP9JteHgOmcOmWAmSxFvJaZ2X~pcUTNDfIh45lwCPMyQi9y8boTvSA__"}
         className='w-[75px] h-[75px] rounded-2xl'
          />
          <p className='absolute bottom-1 left-1 bg-lightGray px-2 pt-1 rounded text-customGray'>5</p>
            </div>
            <p className='text-[10px] w-full justify-center text-center mt-1 text-customGray	'>۱۰۰,۰۰۰ تومان </p>
        </div>
    );
};

export default OrderHow;
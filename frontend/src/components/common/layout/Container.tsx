import React, {FC, PropsWithChildren} from 'react';



const Container: FC<PropsWithChildren> = ({ children }) => {
  return <div className='max-w-full  mx-10'>{children}</div>

};

export default Container;
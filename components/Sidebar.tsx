import React from 'react'

interface Props {
    dispatch: any;
}

const Sidebar = (props: Props) => {
    const { dispatch } = props;
  return (
    <div>
        <h1>Fliters</h1>
        <div className='flex flex-col'>
            <button onClick={() => dispatch("clear")}>Clear Filters</button>
            <div className='flex flex-col'>
                <h2>Price</h2>
                <div className='flex space-x-2'>

                <input onChange={() => dispatch("LTH")} type="radio" name="price" value="lowtohigh" />
                <label>Low to High</label>
                </div>
                <div className='flex space-x-2'>

                <input onChange={() => dispatch("HTL")} type="radio" name="price" value="hightolow" />
                <label>High to Low</label>
                </div>
            </div>
            <div>
                <h2>Size</h2>
                <div className='flex space-x-2'>
                    <input onChange={() => dispatch("S")} type="checkbox" name="size" value="S" id="S" />
                    <label htmlFor="S">S</label>
                 </div>
                    <div className='flex space-x-2'>
                    <input onChange={() => dispatch("M")} type="checkbox" name="size" value="M" id="M" />
                    <label htmlFor="M">M</label>
                    </div>
                    <div className='flex space-x-2'>
                    <input onChange={() => dispatch("L")} type="checkbox" name="size" value="L" id="L" />
                    <label htmlFor="L">L</label>
                    </div>   
            </div>
            <div>
                <h2>Brand</h2>
                <div className='flex space-x-2'>
                    <input onChange={() => dispatch("Nike")} type="checkbox" name="brand" value="Nike" id="Nike" />
                    <label htmlFor="Nike">Nike</label>
                    </div>
                    <div className='flex space-x-2'>
                    <input onChange={() => dispatch("HnM")} type="checkbox" name="brand" value="HnM" id="hnm" />
                    <label htmlFor="HnM">HnM</label>
                    </div>
                    </div>
            <div>
                <h2>Ideal For</h2>
                <div className='flex space-x-2'>
                    <input onChange={() => dispatch("Men")} type="checkbox" name="idealFor" value="M"/>
                    <label htmlFor="M">Men</label>
                    </div>
                    <div className='flex space-x-2'>
                    <input onChange={() => dispatch("Women")} type="checkbox" name="idealFor" value="F"/>
                    <label htmlFor="F">Women</label>
                    </div>
            </div>
        </div>

    </div>
  )
}

export default Sidebar
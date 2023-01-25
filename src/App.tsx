import { useState } from 'react';
import burger from './assets/beef-burger.png';
import './App.css';
import ProductMenu from './components/ProductMenu';
import ProductSearch from './components/ProductSearch';

function App() {
  const [count, setCount] = useState(0);
  const [searchKey, setSearchKey] = useState('');

  return (
    <>
      <div className="hide-print flex flex-row h-screen antialiased text-blue-gray-800">
        <div className="flex flex-row w-auto flex-shrink-0 pl-4 pr-2 py-4">
          <div className="flex flex-col items-center py-4 flex-shrink-0 w-20 bg-cyan-500 rounded-3xl">
          </div>
        </div>
        <div className="flex-grow flex">
          <div className="flex flex-col bg-blue-gray-50 h-full w-full py-4">
            <ProductSearch onSearch={(searchKey: string) => {
              setSearchKey(searchKey);
            }}/>
            <div className="h-full overflow-hidden mt-4">
              <ProductMenu searchKey={searchKey}/>
            </div>
          </div>
          <div className="w-5/12 flex flex-col bg-blue-gray-50 h-full bg-white pr-4 pl-2 py-4">
            <div className="bg-white rounded-3xl flex flex-col h-full shadow">
              <div className="flex-1 flex flex-col overflow-auto">
                <div className="h-16 text-center flex justify-center">
                  <div className="pl-8 text-left text-lg py-4 relative">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                    </svg>
                    <div className="text-center absolute bg-cyan-500 text-white w-5 h-5 text-xs p-0 leading-5 rounded-full -right-2 top-3" x-text="getItemsCount()">13</div>
                  </div>
                  <div className="flex-grow px-8 text-right text-lg py-4 relative">
                    <button className="text-blue-gray-300 hover:text-pink-500 focus:outline-none">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="flex-1 w-full px-4 overflow-auto">
                  <div className="select-none mb-3 bg-blue-gray-50 rounded-lg w-full text-blue-gray-700 py-2 px-2 flex justify-center">
                    <img alt="" className="rounded-lg h-10 w-10 bg-white shadow mr-2" src={burger} />
                    <div className="flex-grow">
                      <h5 className="text-sm" x-text="item.name">Beef Burger</h5>
                      <p className="text-xs block" x-text="priceFormat(item.price)">Rp. 45.000</p>
                    </div>
                    <div className="py-1">
                      <div className="w-28 grid grid-cols-3 gap-2 ml-2">
                        <button x-on:click="addQty(item, -1)" className="rounded-lg text-center py-1 text-white bg-blue-gray-600 hover:bg-blue-gray-700 focus:outline-none">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-3 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4"></path>
                          </svg>
                        </button>
                        <input type="text" className="bg-white rounded-lg text-center shadow focus:outline-none focus:shadow-lg text-sm" />
                        <button x-on:click="addQty(item, 1)" className="rounded-lg text-center py-1 text-white bg-blue-gray-600 hover:bg-blue-gray-700 focus:outline-none">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-3 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="select-none h-auto w-full text-center pt-3 pb-4 px-4">
                <div className="flex mb-3 text-lg font-semibold text-blue-gray-700">
                  <div>TOTAL</div>
                  <div className="text-right w-full" x-text="priceFormat(getTotalPrice())">Rp. 16.000</div>
                </div>
                <div className="mb-3 text-blue-gray-700 px-3 pt-2 pb-3 rounded-lg bg-blue-gray-50">
                  <div className="flex text-lg font-semibold">
                    <div className="flex-grow text-left">CASH</div>
                    <div className="flex text-right">
                      <div className="mr-2">Rp</div>
                      <input x-bind:value="numberFormat(cash)" type="text" className="w-28 text-right bg-white shadow rounded-lg focus:bg-white focus:shadow-lg px-2 focus:outline-none" />
                    </div>
                  </div>
                  <hr className="my-2" />
                  <div className="grid grid-cols-3 gap-2 mt-2">
                    <button className="bg-white rounded-lg shadow hover:shadow-lg focus:outline-none inline-block px-2 py-1 text-sm">+<span>20</span></button>
                    <button className="bg-white rounded-lg shadow hover:shadow-lg focus:outline-none inline-block px-2 py-1 text-sm">+<span>50</span></button>
                    <button className="bg-white rounded-lg shadow hover:shadow-lg focus:outline-none inline-block px-2 py-1 text-sm">+<span>100</span></button>
                    <button className="bg-white rounded-lg shadow hover:shadow-lg focus:outline-none inline-block px-2 py-1 text-sm">+<span>200</span></button>
                    <button className="bg-white rounded-lg shadow hover:shadow-lg focus:outline-none inline-block px-2 py-1 text-sm">+<span>500</span></button>
                    <button className="bg-white rounded-lg shadow hover:shadow-lg focus:outline-none inline-block px-2 py-1 text-sm">+<span>1000</span></button>
                  </div>
                </div>
                <div className="flex mb-3 text-lg font-semibold bg-cyan-50 text-blue-gray-700 rounded-lg py-2 px-3">
                    <div className="text-cyan-800">CHANGE</div>
                    <div className="text-right flex-grow text-cyan-600">Rp. 6.222</div>
                  </div>
                  <button className="text-white rounded-2xl text-lg w-full py-3 focus:outline-none bg-cyan-500 hover:bg-cyan-600">
                    SUBMIT
                  </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

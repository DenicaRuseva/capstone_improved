import React from 'react';
import CategoryButtons from './CategoryButtons/CategoryButtons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './ShopSideBarNew.css';

const shopSideBar = (props) => {
    console.log('in shop side bar');

   
    const attachedClasses = props.shownCategoryMenu ? ['side-bar-wrapper show-categories'] : ['side-bar-wrapper'];
    return (
        <div className='side-bar-main'>
            
        <div className={attachedClasses}>
            <div className='l-only'> 
            <div className='head-decoration'>

                

            <svg xmlns="http://www.w3.org/2000/svg" fill='#996633' version="1.1" x="0px" y="0px" viewBox="0 0 2658 281.386" enableBackground="new 0 0 2658 281.386"> <g> <g> <path d="M1412.709,200.808c61.507,14.105,126.765,20.981,167.007-27.373c1.074,1.273,28.542,30.853,32.277,34.485 c30.587-40.423,92.939-47.71,143.84-47.71c0.148,1.028,3.067,14.552,3.195,15.145c46.867-15.712,105.042-19.062,153.494-19.062 c4.501,4.725,9.985,9.83,12.87,13.226c0,0,462.983-21.01,683.608-30.568c-0.001,0-683.607-30.645-683.608-30.645 c-3.547,4.174-7.395,7.516-12.87,13.225c-48.456,0-105.675-3.156-153.494-19.05c-0.52,2.388-2.917,13.216-3.195,15.145 c-49.191,0-112.445-6.219-143.84-47.71c-2.568,2.481-30.34,32.257-32.277,34.484c-39.584-47.564-109.623-42.892-168.927-26.74 c-43.92-56.438-121.664-61.489-171.911-1.919c-58.067-14.016-122.569-17.309-160.251,28.659 c-0.881-1.014-31.821-34.096-32.209-34.484c-37.583,41.699-87.801,47.71-143.829,47.71c-0.827-2.464-3.055-14.141-3.274-15.145 c-52.561,15.991-100.682,19.05-153.781,19.05c-6.333-6.333-8.208-8.077-12.583-13.225c0,0-683.949,30.645-683.951,30.645 c154.752,6.594,683.951,30.568,683.951,30.568c3.351-3.945,5.419-6.013,12.583-13.226c54.018,0,102.11,3.206,153.781,19.062 c0.216-1,2.297-12.234,3.274-15.145c56.516,0,106.272,6.04,143.829,47.71c0.771-0.776,31.229-33.323,32.209-34.485 c36.746,44.7,101.305,43.204,157.976,29.359C1283.847,263.764,1367.387,262.865,1412.709,200.808"/> </g> </g> </svg>

            </div>
                <div className='md-only'><span>Categories:</span></div>
            </div>
            <div className='hide-on-l'>
                <div className='md-only' onClick={() => props.toggleCategoryMenu()}><span>Shop by category<FontAwesomeIcon icon="chevron-down"/></span></div>
            </div>


            

            <div className='side-bar-container'>
               


 




               
                <div className='side-bar'> 

            
               
                    <CategoryButtons
                    clickOnCategory={props.clickOnCategory}
                    clickOnSubcategory={props.clickOnSubcategory}
                    currentCategory={props.currentCategory}
                    clickedCategories={props.clickedCategories}/>


                
                </div>

            </div>
            
        </div>
        
        {/* <Logo class='small'/> */}
        </div>
    );
};

// const mapStateToProps = state => {
//     return {
//         categoriesAndSubcat: state.categoriesAndSubcat
//     };
// };

export default shopSideBar;
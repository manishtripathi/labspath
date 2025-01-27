import React from 'react'
import ReactPaginate from 'react-paginate';
import './pagination.css'

const arrObj = [{
    'id': 1,
    'name': 'Name_vyjsq',
    'age': 25,
    'email': 'user1@example.com',
    'isActive': true,
    'createdAt': '2019-12-07T17:31:48.691466'
},
{
    'id': 2,
    'name': 'Name_pklaf',
    'age': 68,
    'email': 'user2@example.com',
    'isActive': false,
    'createdAt': '2021-11-04T17:31:48.691485'
},
{
    'id': 3,
    'name': 'Name_axvno',
    'age': 21,
    'email': 'user3@example.com',
    'isActive': false,
    'createdAt': '2022-08-08T17:31:48.691496'
},
{
    'id': 4,
    'name': 'Name_jkeeo',
    'age': 61,
    'email': 'user4@example.com',
    'isActive': false,
    'createdAt': '2022-05-21T17:31:48.691507'
},
{
    'id': 5,
    'name': 'Name_mptcb',
    'age': 27,
    'email': 'user5@example.com',
    'isActive': true,
    'createdAt': '2016-11-29T17:31:48.691516'
},
{
    'id': 6,
    'name': 'Name_koeev',
    'age': 19,
    'email': 'user6@example.com',
    'isActive': true,
    'createdAt': '2015-12-30T17:31:48.691524'
},
{
    'id': 7,
    'name': 'Name_epdtq',
    'age': 76,
    'email': 'user7@example.com',
    'isActive': false,
    'createdAt': '2018-03-12T17:31:48.691535'
},
{
    'id': 8,
    'name': 'Name_odyya',
    'age': 40,
    'email': 'user8@example.com',
    'isActive': false,
    'createdAt': '2020-02-16T17:31:48.691552'
},
{
    'id': 9,
    'name': 'Name_bfwaw',
    'age': 55,
    'email': 'user9@example.com',
    'isActive': true,
    'createdAt': '2024-01-05T17:31:48.691564'
},
{
    'id': 10,
    'name': 'Name_knshl',
    'age': 47,
    'email': 'user10@example.com',
    'isActive': true,
    'createdAt': '2024-06-17T17:31:48.691575'
},
{
    'id': 11,
    'name': 'Name_drfad',
    'age': 25,
    'email': 'user11@example.com',
    'isActive': true,
    'createdAt': '2017-03-06T17:31:48.691588'
},
{
    'id': 12,
    'name': 'Name_mfdvf',
    'age': 70,
    'email': 'user12@example.com',
    'isActive': false,
    'createdAt': '2015-05-18T17:31:48.691599'
},
{
    'id': 13,
    'name': 'Name_xwaif',
    'age': 55,
    'email': 'user13@example.com',
    'isActive': true,
    'createdAt': '2020-10-28T17:31:48.691610'
},
{
    'id': 14,
    'name': 'Name_pgapw',
    'age': 49,
    'email': 'user14@example.com',
    'isActive': true,
    'createdAt': '2021-05-11T17:31:48.691619'
},
{
    'id': 15,
    'name': 'Name_qbjju',
    'age': 37,
    'email': 'user15@example.com',
    'isActive': false,
    'createdAt': '2023-03-16T17:31:48.691629'
},
{
    'id': 16,
    'name': 'Name_xneqp',
    'age': 60,
    'email': 'user16@example.com',
    'isActive': false,
    'createdAt': '2017-10-12T17:31:48.691639'
},
{
    'id': 17,
    'name': 'Name_vpwel',
    'age': 54,
    'email': 'user17@example.com',
    'isActive': false,
    'createdAt': '2022-12-02T17:31:48.691648'
},
{
    'id': 18,
    'name': 'Name_kwzqj',
    'age': 45,
    'email': 'user18@example.com',
    'isActive': false,
    'createdAt': '2020-12-28T17:31:48.691654'
},
{
    'id': 19,
    'name': 'Name_ndamw',
    'age': 74,
    'email': 'user19@example.com',
    'isActive': true,
    'createdAt': '2020-12-12T17:31:48.691661'
},
{
    'id': 20,
    'name': 'Name_mhfls',
    'age': 57,
    'email': 'user20@example.com',
    'isActive': true,
    'createdAt': '2022-07-01T17:31:48.691667'
},
{
    'id': 21,
    'name': 'Name_yvduh',
    'age': 40,
    'email': 'user21@example.com',
    'isActive': false,
    'createdAt': '2015-11-24T17:31:48.691673'
},
{
    'id': 22,
    'name': 'Name_wqzkx',
    'age': 49,
    'email': 'user22@example.com',
    'isActive': false,
    'createdAt': '2024-09-19T17:31:48.691679'
},
{
    'id': 23,
    'name': 'Name_laduy',
    'age': 53,
    'email': 'user23@example.com',
    'isActive': true,
    'createdAt': '2023-12-24T17:31:48.691685'
},
{
    'id': 24,
    'name': 'Name_oeokc',
    'age': 37,
    'email': 'user24@example.com',
    'isActive': false,
    'createdAt': '2022-02-05T17:31:48.691691'
},
{
    'id': 25,
    'name': 'Name_kfgly',
    'age': 50,
    'email': 'user25@example.com',
    'isActive': false,
    'createdAt': '2017-01-22T17:31:48.691698'
},
{
    'id': 26,
    'name': 'Name_rnjcz',
    'age': 43,
    'email': 'user26@example.com',
    'isActive': false,
    'createdAt': '2018-02-24T17:31:48.691704'
},
{
    'id': 27,
    'name': 'Name_jgcsc',
    'age': 39,
    'email': 'user27@example.com',
    'isActive': false,
    'createdAt': '2015-06-25T17:31:48.691722'
},
{
    'id': 28,
    'name': 'Name_wqgsy',
    'age': 68,
    'email': 'user28@example.com',
    'isActive': true,
    'createdAt': '2021-08-17T17:31:48.691729'
},
{
    'id': 29,
    'name': 'Name_dkfwg',
    'age': 41,
    'email': 'user29@example.com',
    'isActive': true,
    'createdAt': '2019-12-21T17:31:48.691735'
},
{
    'id': 30,
    'name': 'Name_kvzsv',
    'age': 34,
    'email': 'user30@example.com',
    'isActive': false,
    'createdAt': '2020-08-15T17:31:48.691741'
},
{
    'id': 31,
    'name': 'Name_egjmk',
    'age': 47,
    'email': 'user31@example.com',
    'isActive': false,
    'createdAt': '2016-11-27T17:31:48.691748'
},
{
    'id': 32,
    'name': 'Name_wkkrz',
    'age': 57,
    'email': 'user32@example.com',
    'isActive': false,
    'createdAt': '2015-12-17T17:31:48.691754'
},
{
    'id': 33,
    'name': 'Name_wiemw',
    'age': 58,
    'email': 'user33@example.com',
    'isActive': true,
    'createdAt': '2017-07-06T17:31:48.691766'
},
{
    'id': 34,
    'name': 'Name_tapsz',
    'age': 27,
    'email': 'user34@example.com',
    'isActive': false,
    'createdAt': '2018-07-29T17:31:48.691773'
},
{
    'id': 35,
    'name': 'Name_pruhi',
    'age': 23,
    'email': 'user35@example.com',
    'isActive': false,
    'createdAt': '2021-11-15T17:31:48.691780'
},
{
    'id': 36,
    'name': 'Name_iizos',
    'age': 68,
    'email': 'user36@example.com',
    'isActive': false,
    'createdAt': '2021-04-14T17:31:48.691786'
},
{
    'id': 37,
    'name': 'Name_ezhyi',
    'age': 31,
    'email': 'user37@example.com',
    'isActive': true,
    'createdAt': '2019-11-06T17:31:48.691792'
},
{
    'id': 38,
    'name': 'Name_iufim',
    'age': 63,
    'email': 'user38@example.com',
    'isActive': false,
    'createdAt': '2022-12-04T17:31:48.691798'
},
{
    'id': 39,
    'name': 'Name_gwbkp',
    'age': 35,
    'email': 'user39@example.com',
    'isActive': true,
    'createdAt': '2021-12-22T17:31:48.691805'
},
{
    'id': 40,
    'name': 'Name_wgrao',
    'age': 41,
    'email': 'user40@example.com',
    'isActive': false,
    'createdAt': '2022-02-16T17:31:48.691811'
},
{
    'id': 41,
    'name': 'Name_hthqo',
    'age': 61,
    'email': 'user41@example.com',
    'isActive': false,
    'createdAt': '2018-02-09T17:31:48.691817'
},
{
    'id': 42,
    'name': 'Name_xnkno',
    'age': 45,
    'email': 'user42@example.com',
    'isActive': true,
    'createdAt': '2015-04-03T17:31:48.691823'
},
{
    'id': 43,
    'name': 'Name_vhjfg',
    'age': 52,
    'email': 'user43@example.com',
    'isActive': true,
    'createdAt': '2022-03-11T17:31:48.691830'
},
{
    'id': 44,
    'name': 'Name_zxkbi',
    'age': 18,
    'email': 'user44@example.com',
    'isActive': false,
    'createdAt': '2024-03-02T17:31:48.691836'
},
{
    'id': 45,
    'name': 'Name_olnks',
    'age': 24,
    'email': 'user45@example.com',
    'isActive': false,
    'createdAt': '2021-12-30T17:31:48.691846'
},
{
    'id': 46,
    'name': 'Name_sljmg',
    'age': 48,
    'email': 'user46@example.com',
    'isActive': true,
    'createdAt': '2023-04-29T17:31:48.691854'
},
{
    'id': 47,
    'name': 'Name_bphpl',
    'age': 44,
    'email': 'user47@example.com',
    'isActive': false,
    'createdAt': '2023-01-10T17:31:48.691864'
},
{
    'id': 48,
    'name': 'Name_rpxza',
    'age': 64,
    'email': 'user48@example.com',
    'isActive': true,
    'createdAt': '2020-02-24T17:31:48.691873'
},
{
    'id': 49,
    'name': 'Name_abqsi',
    'age': 61,
    'email': 'user49@example.com',
    'isActive': true,
    'createdAt': '2015-10-15T17:31:48.691883'
},
{
    'id': 50,
    'name': 'Name_wsstz',
    'age': 37,
    'email': 'user50@example.com',
    'isActive': true,
    'createdAt': '2017-08-14T17:31:48.691894'
}]

function Tablepagination() {
    
    const handlePageClick = (event) => {
        console.log(event)
    }
    return (
        <>

            <ul>
                {arrObj.map(item => <li key={item.id}>{item.name}</li>)}
            </ul>

            <ReactPaginate
                breakLabel="..."
                nextLabel="next >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={10}
                previousLabel="< previous"
                renderOnZeroPageCount={null}
                containerClassName="pagination"
                pageClassName="page-item"
                pageLinkClassName="page-link"
                activeClassName="active"
                previousClassName="page-item"
                nextClassName="page-item"
                previousLinkClassName="page-link"
                nextLinkClassName="page-link"
                disabledClassName="disabled"
            />
        </>

    )
}

export default Tablepagination

# NFT Metadata API

Backend service api contains metadata info, about nft itens (description, images etc) for using on all nft tokens like erc1155 and erc721 it follows the standard using by opensea marketplace


### Request

`GET /detail/:id`

 ### Response

`
{
   "id":"1",
   "name":"Item name : 1",
   "description":"Friendly Creature that enjoys long swims in the ocean. ID: 1",
   "externalURL":"https://nft-metadata-service-api.herokuapp.com/1",
   "image":"https://raw.githubusercontent.com/masterviana/nft-marketplace-metadata-api/main/static/images/1.jpg"
}
`


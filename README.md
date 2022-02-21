# NFT Metadata API

Backend service api contains metadata info, about nft itens (description, images etc) for using on all nft tokens like erc1155 and erc721 it follows the standard using by opensea marketplace

# Running URL

Backed services is running on url [https://nft-metadata-service-api.herokuapp.com/] table below describes data returned by the service

### Request contract description

Return collection description for this collection

`GET /`

 ### Response

<table>
<tr>
<td> Status </td> <td> Response </td>
</tr>
<tr>
<td> 200 </td>
<td>
    
```json
{
  "name": "Demonstrating collection for tests purposes. by @masterviana",
  "description": "Collection created for demonstration series on @masterviana github check full information on github. OpenSea Creatures are adorable aquatic beings primarily for demonstrating what can be done using the OpenSea platform. Adopt one today to try out all the OpenSea buying, selling, and bidding feature set.",
  "image": "https://raw.githubusercontent.com/masterviana/nft-marketplace-metadata-api/main/static/mario.png",
  "banner": "https://raw.githubusercontent.com/masterviana/nft-marketplace-metadata-api/main/static/opensea-banner.png",
  "banner_url": "https://raw.githubusercontent.com/masterviana/nft-marketplace-metadata-api/main/static/opensea-banner.png",
  "external_link": "https://github.com/masterviana/",
  "seller_fee_basis_points": 15,
  "fee_recipient": "0x0aaaaadadada" 
}
```

</td>
</tr>
<tr>
<td> 500 </td>
<td>
Internal Server Error    
</td>
</tr>
</table>


### Request item description

Return item description for an /:id

`GET /detail/:id`

 ### Response

<table>
<tr>
<td> Status </td> <td> Response </td>
</tr>
<tr>
<td> 200 </td>
<td>
    
```json
{
   "id":"1",
   "name":"Item name : 1",
   "description":"Friendly Creature that enjoys long swims in the ocean. ID: 1",
   "externalURL":"https://nft-metadata-service-api.herokuapp.com/1",
   "image":"https://raw.githubusercontent.com/masterviana/nft-marketplace-metadata-api/main/static/images/1.jpg"
}
```

</td>
</tr>
<tr>
<td> 500 </td>
<td>
Internal Server Error    
</td>
</tr>
</table>



# NFT Metadata API

Backend service api contains metadata info, about nft itens (description, images etc) for using on all nft tokens like erc1155 and erc721 it follows the standard using by opensea marketplace


### Request

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
  "id": 10,
  "username": "marcoeidinger",
  "created_at": "2021-02-097T20:45:26.433Z",
  "updated_at": "2015-02-10T19:27:16.540Z"
}
```

</td>
</tr>
<tr>
<td> 400 </td>
<td>
    
**Error**, what the hell is going on?!?
    
</td>
</tr>
<tr>
<td> 500 </td>
<td>
Internal Server Error    
</td>
</tr>
</table>



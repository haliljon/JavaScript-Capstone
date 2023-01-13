class InvolvementAPI {
 static INVOLVEMENT_URL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/zn0LlcXF3wgq2lVo6dac/comments';

 static sendComment = async (id, name, comment) => {
   if (name.length > 0 && comment.length > 0) {
     const data = {
       item_id: id,
       username: name,
       comment,
     };
     await fetch(InvolvementAPI.INVOLVEMENT_URL, {
       method: 'POST',
       headers: {
         'Content-Type': 'application/json',
       },
       body: JSON.stringify(data), // body data type must match "Content-Type" header
     }).then((result) => result);
   }
 }

 static getComments = async (id) => fetch(`${InvolvementAPI.INVOLVEMENT_URL}?item_id=${id}`).then((data) => data.json());
}
export default InvolvementAPI;
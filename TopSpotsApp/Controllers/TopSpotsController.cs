using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using TopSpotsApp.Models;
using Newtonsoft.Json.Serialization;
using System.Web.Http.Cors;
using System.IO;
using Newtonsoft.Json;

namespace TopSpotsApp.Controllers
{
    public class TopSpotsController : ApiController
    {
        public IEnumerable<TopSpots> Get()
        {
            TopSpots[] topspots = JsonConvert.DeserializeObject<TopSpots[]>(File.ReadAllText(@"C:\dev\13-TopSpotsAPI\TopSpotsApp\json.json"));
            return topspots;
        }
       /* public IEnumerable<TopSpots> Delete()
        {

        }*/
    }
}

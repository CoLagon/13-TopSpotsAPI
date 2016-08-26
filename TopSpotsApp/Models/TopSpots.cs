using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;


namespace TopSpotsApp.Models
{
    public class TopSpots
    {
        public string name { get; set; }
        public string description { get; set; }
        public double[] location { get; set;  }
    }
}
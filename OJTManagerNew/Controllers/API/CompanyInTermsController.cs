using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using OJTManagerNew.Models;

namespace OJTManagerNew.Controllers.API
{
    public class CompanyInTermsController : ApiController
    {
        private OJTManagementEntities db = new OJTManagementEntities();

        // GET: api/CompanyInTerms
        public IQueryable<CompanyInTerm> GetCompanyInTerms()
        {
            return db.CompanyInTerms;
        }

        // GET: api/CompanyInTerms/5
        [ResponseType(typeof(CompanyInTerm))]
        public IHttpActionResult GetCompanyInTerm(int id)
        {
            CompanyInTerm companyInTerm = db.CompanyInTerms.Find(id);
            if (companyInTerm == null)
            {
                return NotFound();
            }

            return Ok(companyInTerm);
        }

        // PUT: api/CompanyInTerms/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutCompanyInTerm(int id, CompanyInTerm companyInTerm)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != companyInTerm.ID)
            {
                return BadRequest();
            }

            db.Entry(companyInTerm).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CompanyInTermExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/CompanyInTerms
        [ResponseType(typeof(CompanyInTerm))]
        public IHttpActionResult PostCompanyInTerm(CompanyInTerm companyInTerm)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.CompanyInTerms.Add(companyInTerm);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = companyInTerm.ID }, companyInTerm);
        }

        // DELETE: api/CompanyInTerms/5
        [ResponseType(typeof(CompanyInTerm))]
        public IHttpActionResult DeleteCompanyInTerm(int id)
        {
            CompanyInTerm companyInTerm = db.CompanyInTerms.Find(id);
            if (companyInTerm == null)
            {
                return NotFound();
            }

            db.CompanyInTerms.Remove(companyInTerm);
            db.SaveChanges();

            return Ok(companyInTerm);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool CompanyInTermExists(int id)
        {
            return db.CompanyInTerms.Count(e => e.ID == id) > 0;
        }
    }
}
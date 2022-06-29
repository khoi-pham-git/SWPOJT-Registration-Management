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
    public class AccountsController : ApiController
    {
        private OJTManagementEntities db = new OJTManagementEntities();

        // GET: api/Accounts
        public IQueryable<Account> GetAccounts()
        {
            return db.Accounts;
        }

        // GET: api/Accounts/5
        [ResponseType(typeof(Account))]
        public IHttpActionResult GetAccount(int id)
        {
            Account account = db.Accounts.Find(id);
            if (account == null)
            {
                return NotFound();
            }

            return Ok(account);
        }

        // PUT: api/Accounts/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutAccount(int id, Account account)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != account.AccountID)
            {
                return BadRequest();
            }

            db.Entry(account).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!AccountExists(id))
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

        // POST: api/Accounts
        [ResponseType(typeof(Account))]
        public IHttpActionResult PostAccount(Account account)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Accounts.Add(account);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = account.AccountID }, account);
        }

        // DELETE: api/Accounts/5
        [ResponseType(typeof(Account))]
        public IHttpActionResult DeleteAccount(int id)
        {
            Account account = db.Accounts.Find(id);
            if (account == null)
            {
                return NotFound();
            }

            db.Accounts.Remove(account);
            db.SaveChanges();

            return Ok(account);
        }

        [HttpGet]
        [Route("login/{email}/{pass}")]
        [ResponseType(typeof(Account))]
        public IHttpActionResult Login(string email, string pass)
        {
            var account = db.Accounts.Where(x => x.Email.Equals(email) && x.Password.Equals(pass));
            if (account == null)
            {
                return NotFound();
            }

            return Ok(account);
        }
        public IHttpActionResult Login0(string email, string pass)
        {
            var account = db.Accounts.Where(x => x.Email.Equals(email) && x.Password.Equals(pass));
            if (account == null)
            {
                return NotFound();
            }

            return Ok(account);
        }
        public IHttpActionResult Login1(string email, string pass)
        {
            var account = db.Accounts.Where(x => x.Email.Equals(email) && x.Password.Equals(pass));
            if (account == null)
            {
                return NotFound();
            }

            return Ok(account);
        }
        public IHttpActionResult Login2(string email, string pass)
        {
            var account = db.Accounts.Where(x => x.Email.Equals(email) && x.Password.Equals(pass));
            if (account == null)
            {
                return NotFound();
            }

            return Ok(account);
        }
        public IHttpActionResult Login3(string email, string pass)
        {
            var account = db.Accounts.Where(x => x.Email.Equals(email) && x.Password.Equals(pass));
            if (account == null)
            {
                return NotFound();
            }

            return Ok(account);
        }
        public IHttpActionResult Login4(string email, string pass)
        {
            var account = db.Accounts.Where(x => x.Email.Equals(email) && x.Password.Equals(pass));
            if (account == null)
            {
                return NotFound();
            }

            return Ok(account);
        }
        public IHttpActionResult Login5(string email, string pass)
        {
            var account = db.Accounts.Where(x => x.Email.Equals(email) && x.Password.Equals(pass));
            if (account == null)
            {
                return NotFound();
            }

            return Ok(account);
        }
        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool AccountExists(int id)
        {
            return db.Accounts.Count(e => e.AccountID == id) > 0;
        }
    }
}
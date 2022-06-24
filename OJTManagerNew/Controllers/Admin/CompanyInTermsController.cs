using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;
using OJTManagerNew.Models;

namespace OJTManagerNew.Controllers.Admin
{
    public class CompanyInTermsController : Controller
    {
        private OJTManagementEntities db = new OJTManagementEntities();

        // GET: CompanyInTerms
        public ActionResult Index()
        {
            var companyInTerms = db.CompanyInTerms.Include(c => c.Company).Include(c => c.Term);
            return View(companyInTerms.ToList());
        }

        // GET: CompanyInTerms/Details/5
        public ActionResult Details(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            CompanyInTerm companyInTerm = db.CompanyInTerms.Find(id);
            if (companyInTerm == null)
            {
                return HttpNotFound();
            }
            return View(companyInTerm);
        }

        // GET: CompanyInTerms/Create
        public ActionResult Create()
        {
            ViewBag.CompanyID = new SelectList(db.Companies, "CompanyID", "CompanyName");
            ViewBag.TermID = new SelectList(db.Terms, "TermID", "TermName");
            return View();
        }

        // POST: CompanyInTerms/Create
        // To protect from overposting attacks, enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create([Bind(Include = "ID,CompanyID,TermID")] CompanyInTerm companyInTerm)
        {
            if (ModelState.IsValid)
            {
                db.CompanyInTerms.Add(companyInTerm);
                db.SaveChanges();
                return RedirectToAction("Index");
            }

            ViewBag.CompanyID = new SelectList(db.Companies, "CompanyID", "CompanyName", companyInTerm.CompanyID);
            ViewBag.TermID = new SelectList(db.Terms, "TermID", "TermName", companyInTerm.TermID);
            return View(companyInTerm);
        }

        // GET: CompanyInTerms/Edit/5
        public ActionResult Edit(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            CompanyInTerm companyInTerm = db.CompanyInTerms.Find(id);
            if (companyInTerm == null)
            {
                return HttpNotFound();
            }
            ViewBag.CompanyID = new SelectList(db.Companies, "CompanyID", "CompanyName", companyInTerm.CompanyID);
            ViewBag.TermID = new SelectList(db.Terms, "TermID", "TermName", companyInTerm.TermID);
            return View(companyInTerm);
        }

        // POST: CompanyInTerms/Edit/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit([Bind(Include = "ID,CompanyID,TermID")] CompanyInTerm companyInTerm)
        {
            if (ModelState.IsValid)
            {
                db.Entry(companyInTerm).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            ViewBag.CompanyID = new SelectList(db.Companies, "CompanyID", "CompanyName", companyInTerm.CompanyID);
            ViewBag.TermID = new SelectList(db.Terms, "TermID", "TermName", companyInTerm.TermID);
            return View(companyInTerm);
        }

        // GET: CompanyInTerms/Delete/5
        public ActionResult Delete(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            CompanyInTerm companyInTerm = db.CompanyInTerms.Find(id);
            if (companyInTerm == null)
            {
                return HttpNotFound();
            }
            return View(companyInTerm);
        }

        // POST: CompanyInTerms/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(int id)
        {
            CompanyInTerm companyInTerm = db.CompanyInTerms.Find(id);
            db.CompanyInTerms.Remove(companyInTerm);
            db.SaveChanges();
            return RedirectToAction("Index");
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }
    }
}

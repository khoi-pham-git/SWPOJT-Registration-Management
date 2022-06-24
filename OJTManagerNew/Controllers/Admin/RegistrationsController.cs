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
    public class RegistrationsController : Controller
    {
        private OJTManagementEntities db = new OJTManagementEntities();

        // GET: Registrations
        public ActionResult Index()
        {
            var registrations = db.Registrations.Include(r => r.Company).Include(r => r.Evaluation).Include(r => r.Term).Include(r => r.Student);
            return View(registrations.ToList());
        }

        // GET: Registrations/Details/5
        public ActionResult Details(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Registration registration = db.Registrations.Find(id);
            if (registration == null)
            {
                return HttpNotFound();
            }
            return View(registration);
        }

        // GET: Registrations/Create
        public ActionResult Create()
        {
            ViewBag.CompanyID = new SelectList(db.Companies, "CompanyID", "CompanyName");
            ViewBag.EvaluationID = new SelectList(db.Evaluations, "EvaluationID", "Comment");
            ViewBag.TermID = new SelectList(db.Terms, "TermID", "TermName");
            ViewBag.StudentID = new SelectList(db.Students, "StudentID", "FullName");
            return View();
        }

        // POST: Registrations/Create
        // To protect from overposting attacks, enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create([Bind(Include = "RegistrationID,StudentID,CompanyID,Description,ProcessNote,Status,TermID,EvaluationID")] Registration registration)
        {
            if (ModelState.IsValid)
            {
                db.Registrations.Add(registration);
                db.SaveChanges();
                return RedirectToAction("Index");
            }

            ViewBag.CompanyID = new SelectList(db.Companies, "CompanyID", "CompanyName", registration.CompanyID);
            ViewBag.EvaluationID = new SelectList(db.Evaluations, "EvaluationID", "Comment", registration.EvaluationID);
            ViewBag.TermID = new SelectList(db.Terms, "TermID", "TermName", registration.TermID);
            ViewBag.StudentID = new SelectList(db.Students, "StudentID", "FullName", registration.StudentID);
            return View(registration);
        }

        // GET: Registrations/Edit/5
        public ActionResult Edit(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Registration registration = db.Registrations.Find(id);
            if (registration == null)
            {
                return HttpNotFound();
            }
            ViewBag.CompanyID = new SelectList(db.Companies, "CompanyID", "CompanyName", registration.CompanyID);
            ViewBag.EvaluationID = new SelectList(db.Evaluations, "EvaluationID", "Comment", registration.EvaluationID);
            ViewBag.TermID = new SelectList(db.Terms, "TermID", "TermName", registration.TermID);
            ViewBag.StudentID = new SelectList(db.Students, "StudentID", "FullName", registration.StudentID);
            return View(registration);
        }

        // POST: Registrations/Edit/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit([Bind(Include = "RegistrationID,StudentID,CompanyID,Description,ProcessNote,Status,TermID,EvaluationID")] Registration registration)
        {
            if (ModelState.IsValid)
            {
                db.Entry(registration).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            ViewBag.CompanyID = new SelectList(db.Companies, "CompanyID", "CompanyName", registration.CompanyID);
            ViewBag.EvaluationID = new SelectList(db.Evaluations, "EvaluationID", "Comment", registration.EvaluationID);
            ViewBag.TermID = new SelectList(db.Terms, "TermID", "TermName", registration.TermID);
            ViewBag.StudentID = new SelectList(db.Students, "StudentID", "FullName", registration.StudentID);
            return View(registration);
        }

        // GET: Registrations/Delete/5
        public ActionResult Delete(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Registration registration = db.Registrations.Find(id);
            if (registration == null)
            {
                return HttpNotFound();
            }
            return View(registration);
        }

        // POST: Registrations/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(int id)
        {
            Registration registration = db.Registrations.Find(id);
            db.Registrations.Remove(registration);
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

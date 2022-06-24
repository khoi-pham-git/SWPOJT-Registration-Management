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
    public class RolePermissionsController : Controller
    {
        private OJTManagementEntities db = new OJTManagementEntities();

        // GET: RolePermissions
        public ActionResult Index()
        {
            var rolePermissions = db.RolePermissions.Include(r => r.Permission).Include(r => r.Role);
            return View(rolePermissions.ToList());
        }

        // GET: RolePermissions/Details/5
        public ActionResult Details(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            RolePermission rolePermission = db.RolePermissions.Find(id);
            if (rolePermission == null)
            {
                return HttpNotFound();
            }
            return View(rolePermission);
        }

        // GET: RolePermissions/Create
        public ActionResult Create()
        {
            ViewBag.PermissionID = new SelectList(db.Permissions, "PermissionID", "PermissionDescription");
            ViewBag.RoleID = new SelectList(db.Roles, "RoleID", "RoleID");
            return View();
        }

        // POST: RolePermissions/Create
        // To protect from overposting attacks, enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create([Bind(Include = "ID,RoleID,PermissionID")] RolePermission rolePermission)
        {
            if (ModelState.IsValid)
            {
                db.RolePermissions.Add(rolePermission);
                db.SaveChanges();
                return RedirectToAction("Index");
            }

            ViewBag.PermissionID = new SelectList(db.Permissions, "PermissionID", "PermissionDescription", rolePermission.PermissionID);
            ViewBag.RoleID = new SelectList(db.Roles, "RoleID", "RoleID", rolePermission.RoleID);
            return View(rolePermission);
        }

        // GET: RolePermissions/Edit/5
        public ActionResult Edit(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            RolePermission rolePermission = db.RolePermissions.Find(id);
            if (rolePermission == null)
            {
                return HttpNotFound();
            }
            ViewBag.PermissionID = new SelectList(db.Permissions, "PermissionID", "PermissionDescription", rolePermission.PermissionID);
            ViewBag.RoleID = new SelectList(db.Roles, "RoleID", "RoleID", rolePermission.RoleID);
            return View(rolePermission);
        }

        // POST: RolePermissions/Edit/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit([Bind(Include = "ID,RoleID,PermissionID")] RolePermission rolePermission)
        {
            if (ModelState.IsValid)
            {
                db.Entry(rolePermission).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            ViewBag.PermissionID = new SelectList(db.Permissions, "PermissionID", "PermissionDescription", rolePermission.PermissionID);
            ViewBag.RoleID = new SelectList(db.Roles, "RoleID", "RoleID", rolePermission.RoleID);
            return View(rolePermission);
        }

        // GET: RolePermissions/Delete/5
        public ActionResult Delete(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            RolePermission rolePermission = db.RolePermissions.Find(id);
            if (rolePermission == null)
            {
                return HttpNotFound();
            }
            return View(rolePermission);
        }

        // POST: RolePermissions/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(int id)
        {
            RolePermission rolePermission = db.RolePermissions.Find(id);
            db.RolePermissions.Remove(rolePermission);
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

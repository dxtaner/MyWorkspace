READ = 1
WRITE = 2
DELETE = 4
ADMIN = 8
SHARE = 16
DOWNLOAD = 32

class User:

    def __init__(self, username):
        self.username = username
        self.permission = 0

    def grant_permission(self, perm):
        self.permission |= perm

    def revoke_permission(self, perm):
        self.permission &= ~perm

    def has_permission(self, perm):
        return (self.permission & perm) == perm

    def show_permission(self):
        print(f"Username: {self.username}")
        print("Permissions: ")
        if self.permission & READ: print(" - READ")
        if self.permission & WRITE: print(" - WRITE")
        if self.permission & DELETE: print(" - DELETE")
        if self.permission & ADMIN: print(" - ADMIN")
        if self.permission & SHARE: print(" - SHARE")
        if self.permission & DOWNLOAD: print(" - DOWNLOAD")
        if self.permission == 0: print(" - None")


# Test
user = User("Taner")
user.grant_permission(READ)
user.grant_permission(WRITE)
user.grant_permission(DOWNLOAD)
user.grant_permission(ADMIN)

user.revoke_permission(ADMIN)

user.show_permission()

# Permission kontrolü
print("\nHas READ?", user.has_permission(READ))
print("Has ADMIN?", user.has_permission(ADMIN))

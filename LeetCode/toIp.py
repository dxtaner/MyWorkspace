class Solution(object):
    def restoreIpAddresses(self, s):
        """
        :type s: str
        :rtype: List[str]
        """
        def backtrack(start, parts):
            # If we have 4 parts and used the entire string, it's a valid IP
            if len(parts) == 4 and start == len(s):
                result.append('.'.join(parts))
                return

            # If we have 4 parts but didn't use the entire string, return
            if len(parts) == 4 or start == len(s):
                return

            # Try all possible splits from the current position
            for end in range(start + 1, min(start + 4, len(s) + 1)):
                part = s[start:end]

                # Check for leading zeros and validity of the part
                if (len(part) > 1 and part[0] == '0') or int(part) > 255:
                    continue

                backtrack(end, parts + [part])

        result = []
        backtrack(0, [])
        return result


sol = Solution()
print(sol.restoreIpAddresses("101023"))
